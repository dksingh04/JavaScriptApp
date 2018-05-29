var roots=0;

function getSquareRoots(numbers){
	this.roots = numbers.map(Math.sqrt);
}

var data = {
	numbers: [4, 9, 16],
	roots:0
}

// Simple call will set roots value to global 
// 'roots' variable (i.e. in roots variable in window scope)
getSquareRoots(data.numbers);
console.log(data.roots); // 0

console.log(window.roots); //[2,3,4]

// so to set roots value of data object we can use call or apply method.

getSquareRoots.call(data, data.numbers);
console.log(data.roots); //[2,3,4]
// Similarly you can use apply method as well. 
// The only difference is I am passing the parameter as an array.
getSquareRoots.apply(data, [data.numbers]);
console.log(data.roots); //[2,3,4]
