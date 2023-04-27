let mex = document.getElementById("mex");
let agave = document.getElementById("agave");
let hill = document.getElementById("hill");
let piramid = document.getElementById("piramid");
let mountain = document.getElementById("mountain");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    mex.style.marginTop = value * 2.5 + "px";
    agave.style.marginRight = value * 1.5 + "px";
    piramid.style.marginTop = value * 1.5 + "px";
    mountain.style.marginTop = value * 1.25 + "px";
    hill.style.marginRight = value * 0.15 + "px";
    hill.style.marginTop = value * 0.5 + "px";
});

