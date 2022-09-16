var open = document.querySelector('.hamburger');

open.addEventListener('click', function () {

})

window.onscroll = function () { fixed() };

// Get the header
var header = document.getElementById("header");

var sticky = header.offsetTop;

function fixed() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("shadow");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("shadow");
    }
}