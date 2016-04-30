var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products.length - 1;
var recent = products[last];


//


var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i = i + 1; //i++ // i += 1;
}


//


var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];

for (var i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
}


//


var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);


//


function getMostCostEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highscore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
