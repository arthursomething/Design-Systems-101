window.addEventListener("scroll", parallax);
window.addEventListener("load", start);

function parallax(){
	cuadro.style.left = -(window.pageYOffset=35)+"px";
}

function start(){
	cuadro = document.querySelector("#squaredFloat");
}