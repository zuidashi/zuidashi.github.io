function userfooter() {
    var runday = document.getElementById('runday');
    runday.insertAdjacentHTML('afterend', '<span id="userfooter"> 友情连接 • 免责声明 • 关于本站 • </span>');
}

document.addEventListener("DOMContentLoaded", function() {
    userfooter();
});
