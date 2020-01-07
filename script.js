window.addEventListener("load", puls);


function puls() {
    document.querySelector("#web").classList.add("puls");
    document.querySelector("#UX").classList.add("puls");
    document.querySelector("#animation").classList.add("puls");
    document.querySelector("#indhold").classList.add("puls");
    document.querySelector("#web").addEventListener("click", webVises);
    document.querySelector("#UX").addEventListener("click", uxVises);
    document.querySelector("#animation").addEventListener("click", animationVises);
    document.querySelector("#indhold").addEventListener("click", indholdVises);
}

function webVises() {
    window.open("webside.html", "_self")
}

function uxVises() {
    window.open("uxside.html", "_self")
}

function animationVises() {
    window.open("animationside.html", "_self")
}

function indholdVises() {
    window.open("indholdside.html", "_self")
}
