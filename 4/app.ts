import fs from "fs";
import { listenerCount } from "process";

fs.readFile("./assignments.txt", "utf8", (err: any, data: any) => {
  if (err) {
    console.log(err);
    return;
  }
  data = data.split("\r\n");
  let sortedData: string[][] = [];
  for (let i = 0; i < data.length; i++) {
    let a: string[][] = [];
    sortedData = [...sortedData, data[i].split(",")];
  }
  let tasksOverlappingP1: number = 0;
  let tasksOverlappingP2: number = 0;
  for (let i = 0; i < sortedData.length; i++) {
    let elf1Small: number = parseInt(sortedData[i][0].split("-")[0]);
    let elf1Big: number = parseInt(sortedData[i][0].split("-")[1]);
    let elf2Small: number = parseInt(sortedData[i][1].split("-")[0]);
    let elf2Big: number = parseInt(sortedData[i][1].split("-")[1]);
    if (elf1Small <= elf2Small && elf1Big >= elf2Big) {
      tasksOverlappingP1 += 1;
    } else if (elf2Small <= elf1Small && elf2Big >= elf1Big) {
      tasksOverlappingP1 += 1;
    }

    if (
      (elf2Small >= elf1Small && elf2Small <= elf1Big) ||
      (elf2Big >= elf1Small && elf2Big <= elf1Big)
    ) {
      console.log(sortedData[i]);
      tasksOverlappingP2 += 1;
    }
  }
  console.log("Number of tasks overlapping P1: " + tasksOverlappingP1);
  console.log("Number of tasks overlapping P1: " + tasksOverlappingP2);
});
