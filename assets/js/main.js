window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveral');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

const openMenu = document.querySelector(".fa-bars");
const Menu = document.querySelector(".menu_nav")

openMenu.addEventListener("click", showMenu); 
Menu.addEventListener("click", showMenu); 

function showMenu() {
    Menu.classList.toggle("show")
}