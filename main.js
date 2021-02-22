var default_image = "default.jpg";

var btn = document.querySelector('.btn-toggle');
var btn_icon_dark = document.querySelector('#btn-toggle-icon-dark');
var btn_icon_light = document.querySelector('#btn-toggle-icon-light');
btn.addEventListener("click", function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle("dark-theme");
    btn_icon_dark.classList.toggle("hidden");
    btn_icon_light.classList.toggle("hidden");
});

window.onload = displayImage(default_image);

function displayImage(image_slug) {
    var container = document.getElementById('image-show');
    container.style.backgroundImage = "url('./assets/"+ image_slug + "')";
}