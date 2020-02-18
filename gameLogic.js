const { getConfigJsonAsync } = require("./getConfigJsonAsync");
class Game {
    constructor() {
        this.config = getConfigJsonAsync('./configs/schema.json');
        this.rooms = {};
        this.users = {}
    }
    createNewRoom(data/*{roomName:aaaa}*/) {
        var roomName = data.roomName;
        var accessToken = +new Date
        if (!this.rooms[roomName]) {
            this.rooms[roomName] = {
                accessToken: accessToken,
                gameStarted: false,
                users: {},
                usersArr: [],
                buildings: {}
            }
            return true
        }
        return false
    };
    removeRoom(data/*{roomName:aaaa}*/) {
        var roomName = data.roomName;
        if (this.rooms[roomName]) {
            delete this.rooms[roomName]
            return true
        };
        return false
    };
    logInRoom(data/*{roomName:aaaa,userName:bbbb,userPassword:cccc}*/) {
        var roomName = data.roomName;
        var userName = data.userName;
        var userPassword = data.userPassword
        if (!this.rooms[roomName]) {
            return false
        };
        var countOfUsers = Object.keys(this.rooms[roomName].users).length;
        var maxCountOfUsers = this.config.minUsersLimit;
        if (!this.rooms[roomName].users[userName]) {
            if (countOfUsers >= maxCountOfUsers) { return false };
            this.rooms[roomName].users[userName] = {
                userPassword: userPassword,
                currentCell: 0,
                dice: false,
                balance: this.config.startUserBalance,
                skipMove: false,
                lap: 1,
                salaryLap: 0
            };
            this.rooms[roomName].usersArr.push(userName);
            if (this.rooms[roomName].usersArr.length == 1) {
                this.rooms[roomName].users[userName].dice = true
            }
            return true
        };
        if (this.rooms[roomName].users[userName].userPassword != userPassword) {
            return false
        };
        return true;
    };
    gameMove(res, room, user) {
        var room = this.rooms[room];
        var user = room.users[user];
        user.dice = false;
        var data = { room: room, user: user };
        var diceArr = getRandomDices();
        var diceSumm = diceArr[0] + diceArr[1];
        user.currentCell = getNextCell(user, diceSumm);
        var cellConfig = this.config.gameField[user.currentCell]
        switch (cellConfig.type) {
            default:
                var nextUser = setNextUser(room, user)
                res.send({
                    diceArr: diceArr,
                    diceSumm: diceSumm,
                    nextUser: nextUser,
                    newBalance: user.balance
                })
        }
    }
};
function checkSalary(user, nextCell) {
    if (user.currentCell < 20 && nextCell >= 20 && user.salaryLap == user.lap - 1) {
        user.salaryLap++
        user.balance += game.config.salary
        return true
    }
    return false
}
function setNextUser(room, user) {
    var userName = user.userName;
    var usersLength = room.usersArr.length;
    var userIndex = room.usersArr.indexOf(userName);
    var nextUserName = userName;
    if (userIndex >= usersLength) {
        nextUserName = room.usersArr[0];
    } else {
        nextUserName = room.usersArr[userIndex + 1];
    };
    room.users[nextUserName].dice = true;
    return nextUserName
}
function getNextCell(user, diceSumm) {
    var teoreticCell = user.currentCell + diceSumm
    var nextCell = teoreticCell
    if (teoreticCell > 40) {
        nextCell = teoreticCell - 40
        user.lap++
    }
    checkSalary(user, nextCell)
    return nextCell
}
function getRandomDices() {
    return [randomInteger(), randomInteger()]
}
function randomInteger() {
    let min = 1;
    let max = 6;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}





module.exports = Game
