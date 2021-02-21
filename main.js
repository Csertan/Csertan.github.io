var default_image = "default.png"

var btn = document.querySelector('.btn-toggle')
btn.addEventListener("click", function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle("dark-theme");
});

window.onload = displayImage(default_image);

function displayImage(image_slug) {
    var container = document.getElementById('image-show')
    container.style.background = "url('./assets/"+ image_slug + "') no-repeat center"
    container.style.backgroundSize = "cover"
}