function showName(firstName){
	var nameIntro = "Your Name is ";

	function makeFullName(lastName){
		return nameIntro + firstName + " " + lastName;
	}

	return makeFullName();
}

function doMathOperationOn(x){

	return {
		add : function(y){
			return x+y;
		},
		substract: function(y){
			return x - y;
		}

	};
}

var mathOp = doMathOperationOn(10); // You got the reference to Outer function
 console.log(mathOp.add(2)); // 12 see it remembers the value of x is 10. Magic of closure:)
 console.log(mathOp.substract(2)); // 8

var  makeFullName = showName("Deepak");
//alert(firstName); // you will get javascript error.
//alert(makeFullName("Singh")); // you will get javascript error.
//alert(showName("Deepak")("Singh"));