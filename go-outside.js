var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

var isCitizen = true;
var age = 25;
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

temperature = -55;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

raining = false;
if (!raining) {
  console.log("Leave your umbrella at home!");
}