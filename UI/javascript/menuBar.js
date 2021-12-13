const menu = document.querySelector(".menu-bar");
const nav= document.querySelector(".nav-link");
menu.addEventListener("click", function(){
    nav.classList.toggle("active");
}
);
nav.addEventListener("click", function(){
    nav.classList.toggle("active");
}
);