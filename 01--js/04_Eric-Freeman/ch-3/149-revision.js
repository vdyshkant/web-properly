var dogName = "rover";
var dogWeight = 23;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}

dogName = "spot";
dogWeight = 13;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}

dogName = "spike";
dogWeight = 53;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}

dogName = "lady";
dogWeight = 17;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}


    // eof

function whatShallIWear (temp) {
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

function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + " years old");
}

var myDog = "Fido";
dogYears(myDog, 4);



function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

var guests = 3;
makeTea(guests, "Earl Grey");



function secret() {
  console.log("The secret of life is 42");
}
secret();



function speak(kind) {
  var defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind == "cat") {
    alert("Moew");
  } else {
    alert(defaultSound);
  }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);



    // eof

var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
  centerX = width/2;
  centerY = height/2;
}

function computeDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var d2 = (dx * dx) + (dy * dy);
  var d = Math.sqrt(d2);
  return d;
}

function circleArea(r) {
  var area = Math.PI * r * r;
  return area;
}

setup(width, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);


    // eof

var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
