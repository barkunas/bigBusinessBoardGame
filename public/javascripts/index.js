var $loginBar = $(loginBar);
var $newRoomBar = $(newRoomBar);
var $joinRoomBar = $(joinRoomBar);
var $animation_container = $(animation_container)

var $newRoomInput = $('<input>').attr("placeholder", "New Room Name");
var $newRoomBtn = $('<button>').text('Create New Room');
$newRoomBar.append($newRoomInput, $newRoomBtn);

var $loginRoomInput = $('<input>').attr("placeholder", "room Name");
var $loginUserInput = $('<input>').attr("placeholder", "your User Name");
var $loginPasswordInput = $('<input>').attr("placeholder", "new user password");
var $loginRoomBtn = $('<button>').text('Log In Room');
$joinRoomBar.append($loginRoomInput, $loginUserInput, $loginPasswordInput, $loginRoomBtn);

$newRoomBtn.on("click", function () {
    var roomId = $newRoomInput.val();
    var path = '/game/createRoom/' + roomId;
    if (!roomId) { $newRoomBtn.notify("Enter new Room Name", "warn"); return false }
    $.get(path, (data) => {
        data ?
            $newRoomBtn.notify("Room Created, Please, LogIn in room", "success") :
            $newRoomBtn.notify("Room created already", "error");
        console.log(data);
    }).fail(function () {
        $newRoomBtn.notify("Smthing wrong", "error");
    })
});
$loginRoomBtn.on("click", function () {
    var roomName = $loginRoomInput.val();
    var userName = $loginUserInput.val();
    var userPassword = $loginPasswordInput.val();
    var path = '/game/loginRoom'
    $.post(path,{
        roomName:roomName,
        userName:userName,
        userPassword:userPassword
    }).done((data)=>{
        $loginRoomBtn.notify(data, "success")
        console.log(data)
        sessionStorage.staticData = JSON.stringify(data)
        sessionStorage.userName = userName;
        sessionStorage.roomName = roomName;
        sessionStorage.accessToken = data.accessToken;
        sessionStorage.userPassword = userPassword;
        buildBoard();
        $loginBar.hide();
        $animation_container.removeClass('blur')
    }).fail((data)=>{
        $loginRoomBtn.notify("Smthing wrong", "error")
        console.log(data)
    })
})