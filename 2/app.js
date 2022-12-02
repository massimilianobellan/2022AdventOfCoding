const fs = require("fs");

fs.readFile("./rockpaperscissors.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data = data.split("\r\n");
  let matches = [];
  for (var i = 0; i < data.length; i++) {
    matches = [...matches, data[i].split(" ")];
  }
  let totalPointsA = 0;
  let totalPointsB = 0;
  matches.forEach((element) => {
    totalPointsA = totalPointsA + calculatePoints(element[0], element[1]);
    totalPointsB = totalPointsB + calculatePointsP2(element[0], element[1]);
  });
  console.log("Total points P1: " + totalPointsA);
  console.log("Total points P2: " + totalPointsB);
});

function calculatePoints(choice1, choice2) {
  points = 0;
  if (choice2 == "X") {
    points = points + 1;
  } else if (choice2 == "Y") {
    points = points + 2;
  } else if (choice2 == "Z") {
    points = points + 3;
  }
  if (choice1 == "A") {
    if (choice2 == "X") {
      points = points + 3;
    } else if (choice2 == "Y") {
      points = points + 6;
    }
  }
  if (choice1 == "B") {
    if (choice2 == "Y") {
      points = points + 3;
    } else if (choice2 == "Z") {
      points = points + 6;
    }
  }
  if (choice1 == "C") {
    if (choice2 == "Z") {
      points = points + 3;
    } else if (choice2 == "X") {
      points = points + 6;
    }
  }
  return points;
}

function calculatePointsP2(choice1, choice2) {
  let points = 0;
  if (choice2 == "X") {
    if (choice1 == "A") {
      points = points + 3;
    } else if (choice1 == "B") {
      points = points + 1;
    } else if (choice1 == "C") {
      points = points + 2;
    }
  }
  if (choice2 == "Y") {
    if (choice1 == "A") {
      points = points + 4;
    } else if (choice1 == "B") {
      points = points + 5;
    } else if (choice1 == "C") {
      points = points + 6;
    }
  }
  if (choice2 == "Z") {
    if (choice1 == "A") {
      points = points + 8;
    } else if (choice1 == "B") {
      points = points + 9;
    } else if (choice1 == "C") {
      points = points + 7;
    }
  }
  return points;
}
