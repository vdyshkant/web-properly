{
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  wheels: "R16",
  firtOwner: false,
  taxi: false
};


// 177

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red";
  passengers: 2,
  convertible: false,
  mileage: 1021
}


// 178

var cadi = {
  make: "Cadillac",
  model: "GM",
  year: 1955,
  color: tan,
  convertible: false,
  passengers: 5,
  mileage: 12892
};

// 179

var cat = {
  name: "fluffy"
};

var planet = {
  diameter: 49528
};

var widget = {
  cost$: 3.14,
  "on sale": true
};

var forecast = {
  hightemp: 82
};

var dadget = {
  name: "anvil",
  isHeavy: true
};

var superhero = {
  neme: "Batman",
  alias: "Caped Crusader"
};

// 181

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

fiat.mileage // 88000



var miles = fiat.mileage;
if (miles < 2000) {
  buyIt();
}

// 182

fiat.mileage = 10000;


fiat.needsWashing = true;



if (fiat.year < 1965) {
  classic = true;
}
for (var i = 0; i < fiat.passengers; i++) {
  addPersonToCar();
}

// 183

var dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

// 184

fido.dogYears = 35;

delete fido.dogYears;

var lookMaNoProps = { };
lookMaNoProps.age = 10;
if (lookMaNoProps.age > 5) {
  lookMaNoProps.school = "Elementary";
}



fiat.needsWashing = false;
fiat.needsWashing = true;



// 188



var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  } else {
    return true;
  }
}



// 190



var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  } else {
    return true;
  }
}

var worthALook = prequal(taxi);

if (worthALook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}



// 193


var fido = {
  name: "Fido",
  weight: 48,
  breed: "Mixed",
  loves: "walks"
};

loseWeight(fido, 10);

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
}

alert(fido.name + " now weights " + fido.weight);



// 194



function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you."
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);



// 195

function makeCar() {

  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false]

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  };
  return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);
