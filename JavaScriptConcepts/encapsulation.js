function Person(){
	 var firstName;
	 var lastName;
	return {
		
		 setFirstName: function(firstName){
		 	this.firstName = firstName;
		 },

		 getFirstName: function(){
		 	return this.firstName;
		 },

		 setLastName: function(lastName){
		 	this.lastName = lastName;
		 },
		 getLastName : function(){
		 	return this.lastName;
		 },

		 toString:function(){
		 	return this.firstName+ " "+this.lastName;
		 }
	};
}

var p = new Person();

p.setFirstName("Deepak");
p.setLastName("Singh");

alert(firstName); //ReferenceError: firstName is not defined
alert(lastName); //ReferenceError: lastName is not defined

alert(p.getFirstName()); // Deepak
alert(p.getLastName()); // Singh
alert(p.toString()); // Deepak Singh