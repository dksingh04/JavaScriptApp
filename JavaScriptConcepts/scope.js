var myglobalscope = "global";

function localScopeFun(){
	var localScope="local";
	console.log(localScope);
	console.log(myglobalscope);
}

localScopeFun();
console.log(localScope);
console.log(myglobalscope);
