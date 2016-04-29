// page number is assigned for the book in english.

function whatShallIWear(temp){
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear t-shirt");
  }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

    // eof
    // p89:

saveMyProfile("krissy", 1991, 3.81, false);

function saveMyProfile(name, birthday, GPA, newuser) {
  if (birthday >= 2004) {
    // code for handling a child
  }
  // rest code for this function here
}

//

var student = "krissy";
var year = 1991;
var GPA = 381/100;
var status = "existinguser";
var isNewUser = (status == "newuser");  // !!
saveMyProfile(student, year, GPA, isNewUser);

    // eof
    // p90:

function cook(degrees, mode, duration){
  // your code here
}

cook(425.0, "bake", 45);
cook(350.0, "broil", 10);


//

function doIt(param){
  param = 2;
}
var test = 1;
doIt(test);
console.log(test); // 1

    // eof
    // p91:

function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + " years old");
}

var myDog = "Fido";
dogYears(myDog, 4);

//

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

var guests = 3;
makeTea(guests, "Early Grey");

//

function secret() {
  console.log("The secret of life is 42");
}
secret();

//

function speak(kind) {
  var defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind == "cat") {
    alert("Meow");
  } else {
    alert(defaultSound);
  }
}

var pet = prompt("Enter a type of pet: ", "dog, cat or smth else");
speak(pet);
