var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
  var level = points / pointsPerLevel;

  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);


    // eof
    // p103:


// var points = 0;
function playTurn(player, location) {
  points = 0; // global var
  if (location == 1) {
    points = points + 100;
  }
  return points;
}

var total = playTurn("Jai", 1);
alert(points);


    // eof
    // p104:

var beenCounter = 10;

function getNuumberOfItems(ordertype) {
  var beenCounter = 0;
  if (ordertype == "order") {
    // do some stuff with beenCounter...
  }
  return beenCounter;
}


    // eof
    // p105:

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

function computeDistance(x1, y1, x2. y2) {
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
alert("Disatance: " + distance);

    // eof
    // p109:

var radius = 5;
var area = circleArea(radius);
alert(area);

function circleArea(r) {
  var a = Math.PI * r * r;
  return a;
}
