// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


//my code
var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function srtGradient() {
	//linear-gradient(to right, red , yellow);
	body.style.background = "linear-gradient(to right," 
	+ col1.value 
	+ ","
	+ col2.value
	+ ")";
	css.textContent = body.style.background + ";";
}
col1.addEventListener("input", srtGradient);

col2.addEventListener("input",srtGradient);