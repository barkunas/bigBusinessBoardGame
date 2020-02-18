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
                userName: userName,
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
    buyBuilding(room, user) {
        var room = this.rooms[room];
        var user = room.users[user];
        var currCell = user.currentCell;
        var building = game.config.gameField[currCell].building
        room.buildings[building.name] = { userName: user.userName, rentLevel: 0 };
        user.balance -= building.cost[0]
        room.users[room.accumulateNextUser].dice = true;
        delete room.accumulateNextUser;
        delete room.accumulateCurrUserForBuyBuild;
        return { buildingCoast: building.cost[0], balance: user.balance }

    }
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
            case 'buildingCell':
                if (checkRent(room, user)) {
                    var nextUser = setNextUser(room, user);
                    var rent = rentBuildingLogic(room, user);
                    res.send({
                        diceArr: diceArr,
                        diceSumm: diceSumm,
                        newBalance: user.balance,
                        rent: rent
                    })
                    break;
                };
                if (!isBuilding(room, user)) {
                    accumulateNextUser(room, user)
                    res.send({
                        diceArr: diceArr,
                        diceSumm: diceSumm,
                        newBalance: user.balance,
                        buildingsRequest: true
                    })
                    break;
                };
            case 'inFondCell':
                var nextUser = setNextUser(room, user);
                fondCellLogic(user, false);
                res.send({
                    diceArr: diceArr,
                    diceSumm: diceSumm,
                    nextUser: nextUser,
                    newBalance: user.balance
                })
                break;
            case 'outFondCell':
                var nextUser = setNextUser(room, user);
                fondCellLogic(user, true);
                res.send({
                    diceArr: diceArr,
                    diceSumm: diceSumm,
                    nextUser: nextUser,
                    newBalance: user.balance
                })
                break;
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
function checkRent(room, user) {
    var buildingName = game.config.gameField[user.currentCell].building.name
    if (!room.buildings.hasOwnProperty(buildingName)) { return false }
    if (room.buildings[buildingName].userName == user.userName) { return false }
    return true
}
function isBuilding(room, user){
    var buildingName = game.config.gameField[user.currentCell].building.name
    if (room.buildings.hasOwnProperty(buildingName)) { return true }
    return false
}
function accumulateNextUser(room, user) {
    var userName = user.userName;
    var usersLength = room.usersArr.length;
    var userIndex = room.usersArr.indexOf(userName);
    var nextUserName = userName;
    if (userIndex == usersLength - 1) {
        nextUserName = room.usersArr[0];
    } else {
        nextUserName = room.usersArr[userIndex + 1];
    };
    room.accumulateNextUser = nextUserName;
    room.accumulateCurrUserForBuyBuild = userName;
    return nextUserName
}
function fondCellLogic(user, bool) {
    bool ? user.balance += game.config.trastFondOnePay : user.balance -= game.config.trastFondOnePay;
}
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
    if (userIndex == usersLength - 1) {
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
    if (teoreticCell > 39) {
        nextCell = teoreticCell - 39
        user.lap++
    }
    checkSalary(user, nextCell)
    return nextCell
}
function rentBuildingLogic(room, user) {
    var buildingConfig = game.config.gameField[user.currentCell].building;
    var buildingName = buildingConfig.name;
    var rentLevel = room.buildings[buildingName].rentLevel;
    var rent = buildingConfig.rent[rentLevel];
    var buildingOwnerName = room.buildings[buildingName].userName;
    room.users[buildingOwnerName].balance +=rent
    user.balance -= rent;

    return rent;
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
