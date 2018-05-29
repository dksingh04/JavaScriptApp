function Shape(name, color) {
    this.name = name;
    this.color = color;

    return this;
}
Shape.prototype.displayShape = function (){
    console.log("Name : "+this.name+" color: "+this.color);
}
function Rectangle(name, color) {
// Here we are using call method for chaining constructor
    Shape.call(this, name, color); 
// Added extra property to different shapes.
    this.sides = '4';
}
// Create a Rectangle.prototype object that inherits from Shape.prototype.
// Note: A common error here is to use "new Shape()" to create the
// Rectangle.prototype. The correct place to call Shape is above, 
// where we call t from Rectangle. 
// Similarly other shapes object created and Inherited from Shape class.
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; // Reset the constructor from Shape to Rectangle
Rectangle.prototype.changeColor = function (colr){
    this.color = colr;
    console.log("Color Changed for "+this.name);
}
function Triangle(name, color) {
// you can use apply for chaining the constructor.
    Shape.call(this, name, color);
    this.sides = '3';
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle; // Reset the constructor from Shape to Triangle
Triangle.prototype.changeColor = function (colr){
    this.color = colr;
    console.log("Color Changed for "+this.name);
}
function Circle(name, color) {
    // you can use apply also for chaining the constructor. 
    // The only difference is the way we pass parameter.
    Shape.call(this, name, color);
    this.sides = '0';
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // Reset the constructor from Shape to Circle

Circle.prototype.changeColor = function (colr){
    this.color = colr;
    console.log("Color Changed for "+this.name);
}
var rect = new Rectangle('Rectangle', 'red');
var tri = new Triangle('Triangle', 'Blue');
var cir = new Circle('Circle', 'Green');

rect.displayShape(); //Name : Rectangle color: red
tri.displayShape(); // Name : Triangle color: Blue
cir.displayShape();// Name : Circle color: Green
rect.changeColor("blue") //Color Changed for Rectangle
rect.displayShape(); //Name : Rectangle color: blue
tri.changeColor("Green") //Color Changed for Triangle
tri.displayShape(); //Name : Triangle color: Green
cir.changeColor("Red") //Color Changed for Circle
cir.displayShape(); //Name : Circle color: Red