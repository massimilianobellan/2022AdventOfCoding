const fs = require("fs");

fs.readFile("./calories.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data = data.split("\r\n");
  let elves = [];
  while (data.length > 0) {
    elves = [...elves, data.slice(0, data.indexOf(""))];
    data.splice(0, data.indexOf("") + 1);
  }
  let parsedElves = [];
  elves.forEach((element) => {
    var nums = element.map((str) => {
      return parseInt(str);
    });
    parsedElves = [...parsedElves, nums];
  });
  let calories = [];
  parsedElves.forEach((element) => {
    const sumWithInitial = element.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    calories = [...calories, sumWithInitial];
  });
  console.log("Calories carried by the top elf: " + Math.max(...calories));
  let sumOf3 = 0;
  for (let i = 0; i < 3; i++) {
    sumOf3 = sumOf3 + Math.max(...calories);
    let indexMax = calories.findIndex((element) => {
      return element == Math.max(...calories);
    });
    calories.splice(indexMax, 1);
  }
  console.log("Calories carried by the top 3 elves: " + sumOf3);
});
