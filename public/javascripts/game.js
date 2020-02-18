var game = { users: {} };
var usersLinks = {}
var buildPopup = {}
function initGame(newData) {
    //ничего не изменилось с последнего раза
    //if (JSON.stringify(newData) === JSON.stringify(game)) { return false };
    //пробежимся по изменениям в юзерах
    for (us in newData.users) {
        var user = newData.users[us];
        //юзер никогда не существовал
        if (!game.users.hasOwnProperty(us)) {
            usersLinks[us] = getItemFromLibAndplaceInConteiner('userIcon', exportRoot[`cell_${user.currentCell}`]);
            game.users[us] = { currentCell: 0 }
            console.log('userIconCreated');
        }
        //юзер был но поменялось расположение фишки
        if (user.currentCell != game.users[us].currentCell) {
            exportRoot[`cell_${user.currentCell}`].addChild(usersLinks[us]);
            console.log('userIconMoved');
        }
    }
    //проверка можно ли бросать кубик
    if (newData.users[sessionStorage.userName].dice) {
        exportRoot.dice_btn_status.gotoAndStop('active');
    } else { exportRoot.dice_btn_status.gotoAndStop('empty'); }
    //проверка показывать ли попап о строительстве
    if (newData.accumulateCurrUserForBuyBuild == sessionStorage.userName) {
        if (Object.keys(buildPopup).length == 0) {
            buildPopup = getItemFromLibAndplaceInConteiner('buildPopup', exportRoot[`popup_placeholder`]);
            configureBuildPopup()
        }
    }

    game = newData;
}
function buildBoard() {
    if (!sessionStorage.staticData) { return false };
    var boardConfig = JSON.parse(sessionStorage.staticData).config.gameField;
    var boardLength = boardConfig.length;
    exportRoot.dice_btn_status.diceBtn.on('click', function () {
        rollDice()
    })
    for (i = 0; i < boardLength; i++) {
        let cellName = 'cell_' + i;
        let cellType = boardConfig[i].type;
        let cell = exportRoot[cellName];
        cell.gotoAndStop(cellType);
        stage.update()
        switch (cellType) {
            case 'buildingCell':
                let cellGroup = boardConfig[i].building.buildingType;
                cell.buildingCell.type.gotoAndStop(cellGroup);
        }
    }
    stage.update();
    //first getData
    gameDataInterval = getGameData()
};
function getItemFromLibAndplaceInConteiner(libItem, goalItem, x = 0, y = 0) {
    var item = new rootLib[libItem]();
    item.x = x;
    item.y = y;
    goalItem.addChild(item)
    return item;
}
var gameDataInterval = 0;
function getGameData() {
    return setInterval(function () {
        var userName = sessionStorage.userName;
        var roomName = sessionStorage.roomName;
        var accessToken = sessionStorage.accessToken;
        var path = `/game/getData/${roomName}/${accessToken}`;
        $.get(path)
            .done((data) => {
                console.clear();
                console.table(data.users)
                initGame(data)
            })
    }, 1000)
}
function rollDice() {
    clearInterval(gameDataInterval)
    exportRoot.dice_btn_status.gotoAndStop('empty');
    var userName = sessionStorage.userName;
    var roomName = sessionStorage.roomName;
    var accessToken = sessionStorage.accessToken;
    var path = `/game/rollDice/${roomName}/${accessToken}/${userName}`;
    $.get(path)
        .done((data) => {
            //console.clear()
            //console.table(data)
            //initGame(data)
            gameDataInterval = getGameData();
        })
        .fail((data) => {
            gameDataInterval = getGameData();
        })
}
function configureBuildPopup(){
    var userName = sessionStorage.userName;
    var roomName = sessionStorage.roomName;
    var accessToken = sessionStorage.accessToken;
    var path = `/game/buyBuilding/${roomName}/${accessToken}/${userName}`;
    buildPopup.btn_yes.on('click',function (){
        $.get(path+'/true')
        exportRoot.popup_placeholder.removeChild(buildPopup)
        buildPopup = {}
    })
    buildPopup.btn_no.on('click',function (){
        $.get(path+'/false')
        exportRoot.popup_placeholder.removeChild(buildPopup)
        buildPopup = {}
    })
}