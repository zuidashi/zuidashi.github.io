function userfooter() {
    var runday = document.getElementById('runday');
    runday.insertAdjacentHTML('afterend', '<span id="userfooter" style="display:none">blog.aklin.cn</span>');
}

document.addEventListener("DOMContentLoaded", function() {
    userfooter();
});
