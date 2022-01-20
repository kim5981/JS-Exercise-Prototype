/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//we create a constructor function that initializes - memory is allocated for those variables
function Person(name, age) { //"this" is what assigns those variables to the input later on
  this.name = name;
  this.age = age;
  this.stomach = []; //all instances of stomach initialize with stomach array (that is an array that's empty and is declared "stomach")
} //every new person will get a stomach that is an empty array ^^^

// Give instances of Person the ability to `.eat("food")`:

//we reference the constructor function from above with "Person"
//.prototype is what allows us to extract the memory variables 
//we create a .eat() function so we can use the info from Person() later inside of .eat()

Person.prototype.eat = function(food){
  //.length counts items in stomach, there should be less than 10 in order for eat() to work
  if(this.stomach.length < 10) { //if there are less than 10, the food can get pushed to stomach
    this.stomach.push(food); //we push it to stomach
  }
}

//- Give instances of Person the ability to `.poop()`:
//Person ref's constructor fn , prototype ref's the variables inside of Person
//we create a poop function ()

Person.prototype.poop = function() {
  //the poop function makes stomach an empty array
  this.stomach = [];
}

//- Give instances of Person a method `.toString()`:

//Person fn is ref'd w/ all the variables/fn inside of it. we create a fn called toString that
//returns this.name and this.age and converts those variables to string
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

//create new people

const sallie = new Person ("Sallie", 26);
const mark = new Person ("Mark", 23);
const cori = new Person("Cori", 25);

console.log(sallie.toString());
console.log(mark.toString());
console.log(cori.toString());

mark.eat("pizza");
mark.eat("pizza");
mark.eat("sushi");
mark.eat("tacos");
mark.eat("donuts");
mark.eat("sandwich");
mark.eat("macarons");
mark.eat("ramen noodles");

console.log(mark.stomach);

//make him poo! invoke the fn
mark.poop();

console.log(mark.stomach); //it should log as an empty array again


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon; 
  this.tank = 0;
  this.odometer = 0;
}

//- Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//ref Car fn using prototype 
//get fueled means add gas (SOME #) to tank
//create fn called fill()
Car.prototype.fill = function(gallons) {
//add gallons to "tank"

this.tank = this.tank + gallons; //<--gallons comes from the value you input here
}
//*push() is only for arrays so you can't use push. just add gallons to itelf(tank contains gallons unit w/i)





/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
//person takes a name, age
function Baby(name, age, favoriteToy) {
 //call parent function (Person) and its parameters
 Person.call(this, name, age)
 //add the additional param to this Baby function
 this.favoriteToy = favoriteToy;
}

//we inherit the methods attached to Person's prototype with Object.create
Baby.prototype = Object.create(Person.prototype);
//all of the methods from Person belong to Baby now

//create play method for baby prototype
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

//adds a new baby vvv
const bentley = new Baby ("Bentley", 8, "cardboard box");
//bentley is a cat and he will always be my baby

//prints the baby you added
console.log(bentley.play());
//logs the variable (name you want to access in this case since it's a "person")
//and the .play() is the function we created which logs "Playing with..."

/* 
  TASK 4 
  In your own words explain the four principles for the "this" keyword below:
  1. Window binding: when something is bound to the window it is in the global scope and there is nothing assigned to it
  If there is no implicit, explicit, or new/default binding then "this" will return the window (everything outside all of the functions/objects/etc that you're creating)

  2. Implicit binding: when you create an object and give it keys/method and you reference "this", "this" now refers to the object you are creating -which is on its left. Now
  any time "this" is used it is referring to the object. It is implicit because you're implying that's the object now whenever you use "this" in that object

  3. Explicit binding: Explicit binding is used with constructor functions. It is explicit because you are explicitly telling the program
  what you want to pass in with .call ie ring.call(phone); <-- a function ring() is "called" and we pass in phone

  4. New Binding:
  New lets us insert NEW values to an object we previously created without changing the original object
  It works somewhat like reassigning a variable but saves you the time of having to type everything out
  Rather than write x = new variable every new instance, you sort of create an equation/a process for the computer to automatically reassign that data that for you


*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}