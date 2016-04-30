var myImportantCounter = 0;

myInportantCounter = myImportantCounter + 1;

myImportantCounter++; // +1

myImportantCounter--; // -1

    // 147


var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var output;


for (var i = 0; i < scores.length; i++) {
  var output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}

// 181

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
console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);

// 150

var genres = ["80s", "90s", "Electronic", "Folk"];

var genres = [];
genres[0] = "Rockabilly";
genres[1] = "Ambient";
var size = genres.length;



var genres = [];
genres.push("Rockabilly");
genres.push("Ambient");
var size = genres.length;

// 152

var sparseArray = [ ];
sparseArray[0] = true;
sparseArray[100] = true;



if (myarray[i] == undefined) {
  ...
}



var myarray = new Array(3);

// 153

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

var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}

console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with highest score: " + bestSolutions.join(", #"));


// version without .push()

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

var bestSolutions = new Array();
var k = 0;
for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions[k] = i;
    k = k + 1;
  }
}

console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with highest score: #" + bestSolutions.join(", #"));

// 155

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
console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}

console.log("Solutions with highest score: #" + bestSolutions.join(", #"));

// 157

var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];


function printAndGetHighScore(arr) {
  var highScore = 0;
  var output;
  for (var i = 0; i < arr.length; i++) {
    output = "Bubble solution #" + i + " score: " + arr[i];
    console.log(output);
    if (arr[i] > highScore) {
      highScore = arr[i];
    }
  }
  return highScore;
}

var highScore = printAndGetHighScore(scores);

console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getBestResults(arr, highScore) {
  var bestSolutions = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

var bestSolutions = getBestResults(scores, highScore);

console.log("Solutions with the highest score: #" + bestSolutions.join(", #"));



//



function printScores(scores) {
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
}

function getHighScore(scores) {
  var highScore = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}


// 162

var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

var price = 100;
for (var i = 0; i < bestSolutions.length; i++) {
  if (costs[bestSolutions[i]] < price) {
    price = costs[bestSolutions[i]];
    console.log("the winner is: " + bestSolutions[i] + " element from costs arr");
  }
}



// #2



var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];


var bestSolutions = [];
var cost = 100;
var index = 0;
for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
    if (costs[i] < cost) {
      index = i;
      cost = costs[i];
    }
  }
}


console.log("The most costeffective solution is " + index + " with the value: " + cost);


//

function getMostCostEffectiveSolution(scores, costs, highScore) {
  var cost = 100;
  var index;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
        console.log(index);
        console.log(cost);
      }
    }
  }
  return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
