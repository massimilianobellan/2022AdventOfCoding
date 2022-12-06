import fs from "fs";
const alphabet: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

fs.readFile("./rucksack.txt", "utf8", (err: any, data: any) => {
  if (err) {
    console.log(err);
    return;
  }
  //Part 1
  data = data.split("\r\n");
  let rucksacks: string[][] = [];
  for (let i = 0; i < data.length; i++) {
    rucksacks = [...rucksacks, data[i].split("")];
  }
  let pointsP1: number = 0;
  for (let i = 0; i < rucksacks.length; i++) {
    let compartment1: string[] = rucksacks[i].slice(0, rucksacks[i].length / 2);
    let compartment2: string[] = rucksacks[i].slice(
      rucksacks[i].length / 2,
      rucksacks[i].length
    );
    let filteredArray: string[] = compartment1.filter((value) =>
      compartment2.includes(value)
    );
    filteredArray = [...new Set(filteredArray)];
    pointsP1 += alphabet.indexOf(filteredArray[0]) + 1;
  }
  console.log("Total for P1 is: " + pointsP1);

  //Part 2
  let pointsP2: number = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    let filteredArray: string[] = rucksacks[i].filter((value) =>
      rucksacks[i + 1].includes(value)
    );
    filteredArray = filteredArray.filter((value) =>
      rucksacks[i + 2].includes(value)
    );
    filteredArray = [...new Set(filteredArray)];
    pointsP2 += alphabet.indexOf(filteredArray[0]) + 1;
  }
  console.log("Total for P2 is: " + pointsP2);
});
