var i = 0;
while (i < scores.length) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  i = i + 1;
}


for (var i = 0; i < scores.length; i = i + 1) { // OR i += 1; OR i++;
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}


    // 141

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false, false, false, true];

for (i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    output = products[i] + " contains bubble gum";
    console.log(output);
  }
}


    // 142 - the first part of the report

var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var output;

for (var i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i +
                " score: " + scores[i];
  console.log(output);
}

    // 145

while (answer != "forty-two")

// equal to

for (;answer != "forty-two";)
