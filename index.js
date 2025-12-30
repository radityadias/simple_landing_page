var count = 0
var navbarMenuState = 0
var navbarStatus = "open" | "closed"

setColors();

document.getElementById('button-month').addEventListener('click', function() {
    const x = document.getElementsByClassName('price');

    x[0].innerHTML = '<strong>$29.99</strong>';
    x[1].innerHTML = '<strong>$49.99</strong>';
    x[2].innerHTML = '<strong>$149.99</strong>';

    count = 0
    setColors();
});

document.getElementById('button-year').addEventListener('click', function() {
    const x = document.getElementsByClassName('price');

    x[0].innerHTML = '<strong>$299.99</strong>';
    x[1].innerHTML = '<strong>$499.99</strong>';
    x[2].innerHTML = '<strong>$1499.99</strong>';

    count = 1
    setColors();
});

document.getElementById('button-navbar').addEventListener('click', function() {
    setNavbarState();
    setNavbarBehavior();
});

document.querySelectorAll('#navbar-menu a').forEach(item => {
    item.addEventListener('click', event => {
        onNavbarLinkClick();
    })
});

function setNavbarState(){
    if (navbarMenuState == 0){
        navbarMenuState = 1
    }
    else{
        navbarMenuState = 0
    }
}

function setNavbarBehavior(){
    if (navbarMenuState == 0) {
        document.getElementById("navbar-menu").classList.remove("hidden");
        document.getElementsByTagName("body")[0].classList.add("bg-black/50");
        navbarStatus = "open"
    } else {
        document.getElementById("navbar-menu").classList.add("hidden");
        document.getElementsByTagName("body")[0].classList.remove("bg-black/50");
        navbarStatus = "closed"
    }
}

function setColors() {
    if (count == 0) {
        document.getElementById("button-month").style.backgroundColor = "oklch(87.2% 0.01 258.338)";    
        document.getElementById("button-year").style.backgroundColor = "oklch(92.8% 0.006 264.531)";
    } else {
        document.getElementById("button-year").style.backgroundColor = "oklch(87.2% 0.01 258.338)";
        document.getElementById("button-month").style.backgroundColor = "oklch(92.8% 0.006 264.531)";
    }
}

function onNavbarLinkClick() {
    if (navbarStatus == "closed") {
        return
    } else {
        setNavbarState();
        setNavbarBehavior();
    }
}