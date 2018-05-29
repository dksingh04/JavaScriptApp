var info = {
		firstName:"Rajveer",
		lastName:"Singh",
		address:"Pune"
}

var personInfoOnclick = {
	info:{
		firstName:"Deepak",
		lastName:"Singh",
		address:"Pune"
	},

	showDetailsOnClick:function(event){
		console.log(this.info.firstName+" "+this.info.lastName+" "+this.info.address);
	}
};

// How to use the concept of borrow using bind
var dispOtherInfo = {
	info:{
		firstName:"Jon",
		lastName:"Smith",
		address:"Cincinnati"
	}
}

function suggestActivity(age, temp, name){
	var msg = "";
	if(age < 10)
		msg = "but in Guardian supervision";


	if(temp>=80){
		console.log("Hey "+name+", You can Swim "+msg);
	}else if(temp >=60 && temp < 80){
		console.log("Hey "+name+", You can play out door game (Baseball, Cricket, Tennis etc.) "+msg);
	}else if(temp >=40 && temp < 60){
		console.log("Hey "+name+", You can Play Cricket or golf "+msg);
	}else if(temp < 40){
		console.log("Hey "+name+", You can do Skiing "+msg);
	}
}
//$("#divbind").click(personInfoOnclick.showDetailsOnClick); // TypeError: this.info is undefined

/**
	So to fix the above issue there are different ways.
*/

//Step 1. Use of bind method which we are discussing here
$("#divbind").click(personInfoOnclick.showDetailsOnClick.bind(personInfoOnclick));
// Step 2. is passing annonymous callback function
$("#divbind").click(function(event) {
	personInfoOnclick.showDetailsOnClick(event);
});
// step 3. call method showDetailsOnClick from DOM element.
//onclick="personInfoOnclick.showDetailsOnClick();"
//<div id="divbind" onclick="personInfoOnclick.showDetailsOnClick();" 
//style="height:10px; display:block;"> Show Information </div>

var showDetailsOnClickVar = personInfoOnclick.showDetailsOnClick;

showDetailsOnClickVar(); // Rajveer Singh Pune 

// Why it is printing Rajveer Singh why not Deepak Singh?

/**
This is because showDetailsOnClickVar is now a global function and context of this 
keyword belongs to global scope.

If variable 'info' was not defined as a global varaible and then you will try 
to call showDetailsOnClickVar() function as above then you will get JavaScript Error 
TypeError: this.info is undefined, because 'this.info' belongs to 
personInfoOnclick object locally and showDetailsOnClickVar() will try to find 'info' 
property in global 'this' which is undefined.

This can be fixed using bind() method by setting the this value	explicitly 
(i.e. passing personInfoOnclick object explicitly).
*/

var showDetailsOnClickVar = personInfoOnclick.showDetailsOnClick.bind(personInfoOnclick);

showDetailsOnClickVar(); // Deepak Singh Pune 
// We can borrow showDetailsOnClick method from personInfoOnclick object in dispOtherInfo.
dispOtherInfo.showDetails = personInfoOnclick.showDetailsOnClick;
// Calling the method in this way will throw an error because there is no variable 'info' 
// and calling this will throw JavaScript error TypeError: this.info is undefined
dispOtherInfo.showDetails(); 

// To fix the above issue we can use borrow concept of JavaScript.
dispOtherInfo.showDetailsOnClick = personInfoOnclick.showDetailsOnClick.bind(dispOtherInfo);

dispOtherInfo.showDetailsOnClick(); 


/**************************************************************/

/**
	Currying function
*/
// first parameter is this, since we are not using 'this' keyword hence passing as a null
suggstActivityforAdlt = suggestActivity.bind(null, 30);

suggstActivityforAdlt(80, "Deepak Singh");
// Now you have to simply change the temprature and name to know the suggested activity.
suggstActivityforAdlt(60, "Jon");
suggstActivityforAdlt(50, "Richard");
suggstActivityforAdlt(38, "Tony");

suggstActivityforKid = suggestActivity.bind(null, 8);

suggstActivityforKid(80, "Dhiraaj");
// Now you have to simply change the temprature and name to know the suggested activity.
suggstActivityforKid(60, "Rajveer");
suggstActivityforKid(50, "Tom");
suggstActivityforKid(38, "Angela");

// With bind 
