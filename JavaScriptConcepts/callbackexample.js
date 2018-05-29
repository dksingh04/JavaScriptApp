var getInformation = {
/* first method (function inside an object) is called "names" */
	"firstName":"Deepak",
	numarr:[1, 2, 3, 5],

	"names": function () {
		alert("get the names");
	},
/* second method is called "checkForTim" */
	"checkForTim": function () {
		alert("checking for tim");
	},

	"add" : function(x, y){
		alert(x+y);
	}
};

getInformation.lastName="Singh";

/* get the names on load */
alert(getInformation.firstName);
alert(getInformation.lastName);
window.addEventListener("load", getInformation.names, false);
/* check for Tim on click */
document.addEventListener("click", getInformation.add(10, 10), false);