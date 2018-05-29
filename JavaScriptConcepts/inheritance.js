
var Person = function(firstName) {
  this.firstName = firstName;
};

Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};


function Student(firstName, subject) {
  
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
}


Student.prototype = Object.create(Person.prototype); 


Student.prototype.constructor = Student;

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "+ this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Example usage:
var student1 = new Student("Deepak", "JavaScript");
student1.sayHello();   // "Hello, I'm Deepak. I'm studying JavaScript."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true