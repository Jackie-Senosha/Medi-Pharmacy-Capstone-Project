function GetModel(url) {
    $.get(url, function (partial) {
        $("div.modal-content").empty().append(partial);
    });
}

function myFunction() {
    var x = document.getElementById("nav_bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

var isOpen = false;

function togglecart() {
    if (isOpen) {
        document.getElementById("cart").style.display = "none";
        isOpen = false;
    } else {
        document.getElementById("cart").style.display = "";
        isOpen = true;
    }
}

function sidenavopen() {
    document.getElementById("side_nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function sidenavclose() {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}