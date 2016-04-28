if (inStock == true) {
  if (onSale == true) {
    // sounds like a bargain!
    alert("buy buy buy!");
  }
}

// p99:

if (inStock == true && onSale == true) {
  alert("buy buy buy!");
}



if (inStock == true && (onSale == true || price < 60)) {
  alert("buy buy buy!");
}




var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);  // true


var guess = 6;
var isValid = (guess >= 0 && guess <= 6)  // true


var kB = 1287;
var tooBig = (kB > 1000);  // true
var urgent = true;
var sendFile = (urgent == true || tooBig == false); // true


var keyPressed = "N";
var points = 142;
var level;  // 2
if (keyPressed == "Y" || (points > 100 && points < 200)) {
  level = 2;
} else {
  level = 1;
}


  // eof
  // p100:

var price = 250;

if (price < 200 || price > 600) {
  alert("Price is too low or too high! Don't buy the gadget.");
} else {
  alert("Price is right! Buy the gadget.");
}

    // eof
    // p103:

var randomLoc = Math.floor(Math.random() * 5);

    // eof
    // p105:


var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    // rest code...
  }
}
