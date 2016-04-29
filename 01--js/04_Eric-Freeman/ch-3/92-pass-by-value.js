var age = 7;

function addOne(x) {
  x = x + 1;
}

addOne(age);


//

function doIt(param) {
  param = 2;
}
var test = 1;
doIt(test);
console.log(test); // 1

    // eof
    // 94

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);   // Brewing 3 cups of undefined

makeTea(3, "Early Grey", "hey ma!", 42);  // Brewing 3 cups of Early Grey



function barkAtTheMoon() {
  console.log("Wooooooooo!");
}
barkAtTheMoon();


    // eof
    // p95:

function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    mesage = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";
    // setMode("bake");
    // setTemp(degrees);
  }
  return message;
}

var status = bake(350);

    // eof
    // p96:

function calculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);
