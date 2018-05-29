(function () {
"use strict";
/* store browser names in an array */
var browsers = [
"chrome", /* numbering starts at "0" */
"firefox",
"IE",
"safari",
"opera"

];
var browserCount = browsers.length;
var i;
/* checking to make sure there are browsers in the list */
if(browserCount > 0){
for(i = 0; i < browserCount; i = i + 1){
var browser = browsers[i];
/* if the browser is "chrome", do something special */
if(browser === "chrome"){
alert(browser + ", Browser");
} else {
alert(browser);
}
}
}
}
)();

(function (message){
	console.log(message); // Hello
}).call(this, "Hello");