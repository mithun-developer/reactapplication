let day = "Friday";

switch (day) {
  case "Monday":
    console.log("7 AM");
    break;

  case "Tuesday":
    console.log("4 AM");
    break;
  case "Wednesday":
    console.log("4 AM");
    break;
  case "Thursday":
    console.log("4 AM");
    break;
  case "Friday":
    console.log("9 AM");
    break;
  case "Saturday":
    console.log("8 AM");
    break;
  case "Sunday":
    console.log("8 AM");
}

let num1 = 4;
let num2 = 2;
let result = num1 + num2;

console.log(`The addition of ${num1} and ${num2} is ${result} `);
console.log(`my name is
mithun`);

for (i = 0; i < 5; i++) {
  console.log("Hi");
  for (let j = 0; j < 5; j++) {
    console.log("Hello");
  }
}

// let i = 1;

// do {
//   console.log("first");
//   i++;
// } while (i < 4);

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

let num = 2348735;

while (num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10);
}

let laptop = {
  brand: "HP",
  cpu: "5 ghz",
  ram: "8gb",

  abc: {},
};

delete laptop.abc;
console.log(laptop);
