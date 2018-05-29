var arrayLikeObj = {0:"Deepak", 1:"Singh", 2:"35", length:3};

var newArray = Array.prototype.slice.call(arrayLikeObj, 0);

console.log(newArray);
// You can use push method.
Array.prototype.push.call(arrayLikeObj, 'Cincinnati');

// You can notice here the length of the object got changed.
console.log(arrayLikeObj); //{0:"Deepak", 1:"Singh", 2:"35", 3:"Cincinnati" length:4}

// You can do search as well.

var index = Array.prototype.indexOf.call(arrayLikeObj, 'Cincinnati');

console.log(index); // 3

// You can use pop, reverse and other methods to get the benefits 
// of Array functions in an array-like objects.

function list(){
	console.log(arguments);
	return Array.prototype.slice.call(arguments, 0);
}

console.log(list(1,2,3,4,5)); //[1, 2, 3, 4, 5]

console.log(list("UP", "MH", "BH", "HY")); // ["UP", "MH", "BH", "HY"]




