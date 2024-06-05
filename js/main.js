window.onscroll = function () {
    myFunction();
};

function myFunction() {
    // var nav = document.getElementById("navbarScroll");
    var header = document.querySelector("header");
    var search = document.getElementById("faSearch");
    var mode = document.getElementById("mode");
    var dropdown = document.getElementById("dropdown");
    if (document.documentElement.scrollTop > 100) {
        console.log("đang scroll");
        //nav.classList.remove("bg-transparent");
        header.classList.add("bg-head");
        search.classList.add("search2");
        mode.classList.add("mode2");
        dropdown.style.color = "#040a17";
        document.querySelector(".navbar-brand").style.color = "#000";
        //nav.style.backgroundColor = "#ccc !important";
    } else {
        header.classList.remove("bg-head");
        search.classList.remove("search2");
        mode.classList.remove("mode2");
        dropdown.style.color = "#fff";
        document.querySelector(".navbar-brand").style.color =
            "var(--primary-color)";
        console.log("Không scroll nữa");
    }
}

document.querySelectorAll("a.dropdown-toggle").forEach(function (element) {
    element.addEventListener("click", function () {
        // Xóa thuộc tính 'data-poper-static' từ the ul
        document
            .querySelector(".dropdown-menu")
            .removeAttribute("data-bs-popper");
    });
});

//Bắt sự kiện click vào header active
// var item = document.querySelector(".dropdown-item");
// for(let i = 0; i< 8; i++){

// }

// item.onclick = function(){
//     item.classList.add("active");
// }
