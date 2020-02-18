var express = require('express');
var router = express.Router();

/* Route for game logic */
router.get('/', function (req, res, next) {
    console.log(global.game);
    res.send();
});
router.get('/createRoom/:id', function (req, res, next) {
    var roomName = req.params.id;
    var result = global.game.createNewRoom({
        roomName: roomName
    });
    res.send(result);
});
router.post('/loginRoom', function (req, res, next) {
    var roomName = req.body.roomName;
    var userName = req.body.userName;
    var userPassword = req.body.userPassword;
    var result;
    if (!(roomName || userName || userPassword)) {
        result = false;
        res.send({ result: result })
    } else {
        global.game.logInRoom({
            roomName: roomName,
            userName: userName,
            userPassword: userPassword
        }) ?
            res.send({
                accessToken: global.game.rooms[roomName].accessToken,
                config: game.config
            }) :
            res.send({ result: false });
    };
});
router.get('/getData/:room/:accessToken', function (req, res, next) {
    if (!checkAccess(req.params.room, req.params.accessToken)) { res.send('false'); return false }
    var dirtyData = JSON.parse(JSON.stringify(game.rooms[req.params.room]));
    for (user in dirtyData.users) {
        dirtyData.users[user].userPassword = 0;
    }
    res.send(dirtyData)
})

router.get('/rollDice/:room/:accessToken/:user', function (req, res, next) {
    if (!checkAccess(req.params.room, req.params.accessToken)) { res.send('false'); return false }
    game.gameMove(res,req.params.room, req.params.user)
})
function checkAccess(roomName, accessToken) {
    var chekRoomName = game.rooms.hasOwnProperty(roomName);
    var checkAccessToken = accessToken == game.rooms[roomName].accessToken;
    if (chekRoomName && checkAccessToken) {
        return true
    };
    return false
}

module.exports = router;