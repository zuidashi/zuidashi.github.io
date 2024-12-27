function userfooter() {
    var runday = document.getElementById('runday');
    runday.insertAdjacentHTML('afterend', '<span id="userfooter">blog.aklin.cn</span>');
}

document.addEventListener("DOMContentLoaded", function() {
    userfooter();
});
