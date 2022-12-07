import fs from "fs";

fs.readFile("./crane.txt", "utf8", (err: any, data: any) => {
  if (err) {
    console.log(err);
    return;
  }
  data = data.split("\r\n");
  console.log(data);
});
