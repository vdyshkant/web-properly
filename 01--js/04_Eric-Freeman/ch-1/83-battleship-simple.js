var location1 = Math.floor(Math.random() * 5 / 100);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):", "");
  if (guess < 1 || guess > 7) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      console.log("Корабль подбит!")
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        console.log("Корабль потоплен успешно!")
      }
    } else {
      console.log("Miss!");
    }
  }
}
console.log("Your accuracy was around " + hits/guesses * 100 + "%!");



    // eof
    // 93



var location1 = Math.floor(Math.random() * 5 / 100);
var location2 = location1 + 1;
var location3 = location1 + 2;

// console.log(location1 + " - " + location2 + " - " + location3);

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):", "");
  if (guess < 0 || guess > 6) {
    alert('Please enter a valid cell number!');
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits += 1;
      alert("HIT!");

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

// 94

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your accuracy was " + (3/guesses);
alert(stats);


    // eof
    // 96
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Rweady, aim, fire! (enter a number from 0-6):", "");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means yout shooting accuracy was " + (3/guesses);
alert(stats);
