var count = 0

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

function setColors() {
    if (count == 0) {
        document.getElementById("button-month").style.backgroundColor = "oklch(87.2% 0.01 258.338)";    
        document.getElementById("button-year").style.backgroundColor = "oklch(92.8% 0.006 264.531)";
    } else {
        document.getElementById("button-year").style.backgroundColor = "oklch(87.2% 0.01 258.338)";
        document.getElementById("button-month").style.backgroundColor = "oklch(92.8% 0.006 264.531)";
    }
}
