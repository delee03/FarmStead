window.onscroll = function () {
    myFunction();
};

function myFunction() {
    // var nav = document.getElementById("navbarScroll");
    var nav = document.querySelector("nav");
    if (document.documentElement.scrollTop > 100) {
        console.log("đang scroll");
        //nav.classList.remove("bg-transparent");
        nav.classList.toggle("bg");
    } else {
        nav.classList.toggle("bg");
        console.log("Không scroll nữa");
    }
}
