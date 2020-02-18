var game = { users: {} };
var usersLinks = {}
function initGame(newData) {
    //ничего не изменилось с последнего раза
    if (JSON.stringify(newData) === JSON.stringify(game)) { return false };
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

    game = newData;
}
function buildBoard() {
    if (!sessionStorage.staticData) { return false };
    var boardConfig = JSON.parse(sessionStorage.staticData).config.gameField;
    var boardLength = boardConfig.length;
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
    setInterval(() => getGameData(), 3000)
};
function getItemFromLibAndplaceInConteiner(libItem, goalItem, x = 0, y = 0) {
    var item = new rootLib[libItem]();
    item.x = x;
    item.y = y;
    goalItem.addChild(item)
    return item;
}
function getGameData() {
    var userName = sessionStorage.userName;
    var roomName = sessionStorage.roomName;
    var accessToken = sessionStorage.accessToken;
    var path = `/game/getData/${roomName}/${accessToken}`;
    $.get(path)
        .done((data) => {
            console.log(data)
            initGame(data)
        })
}