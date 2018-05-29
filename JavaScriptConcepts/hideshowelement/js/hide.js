
var hideButton = document.getElementById("hide");
var showButton = document.getElementById("show");
var target = document.getElementById("target");
/* define what we want to do in a function */
function hide(){
	target.setAttribute("class","hide");
}
function show(){
	target.setAttribute("class","show");
}
/* add the CSS class when the button is clicked */
hideButton.onclick = function(){
	//alert("Hello");
	target.setAttribute("class","hide");
};
//hideButton.addEventListener("click", hide, false);
showButton.addEventListener("click", show, false);