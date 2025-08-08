function showMessage() {

// Create an empty Object
const person = {};

// Add Properties
person.firstName = "Ardinc";
person.lastName = "Edis";
person.age = 56;
person.eyeColor = "hazel"; 

// Display Data from Object
//document.getElementById("demo").innerHTML =
//person.firstName + person.lastName + " is " + person.age + " years old and has " + person.eyeColor + " eyes.";

const messageElement = document.getElementById("message");
messageElement.textContent = person.firstName + " " + person.lastName + " is " + person.age + " years old and has " + person.eyeColor + " eyes.";
}
