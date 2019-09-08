const map = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "obs", "obs", "obs", "obs", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obs", null, null, null, null, null, null, null, null],
  [null, "obs", null, null, null, null, null, null, null, null],
  [null, "obs", null, null, null, null, null, null, null, null],
  [null, "obs", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

//function to create rover with specified direction and position.
function initRover(direction, x, y) {
  //If the position is not available on the map, print an error and exit the function.
  if (map[y][x] !== null) {
    console.log("This position is not available");
    return;
  }

  //Occupies the requested position on the map.
  map[y][x] = "rover";

  //Returns a rover like object with the propreties initialized.
  return {
    direction: direction,
    x: x,
    y: y,
    travelLog: []
  };
}

function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  rover.travelLog.push({ x: rover.x, y: rover.y });

  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        if (map[rover.y - 1][rover.x] !== null) {
          console.log(`The rover found something at x = ${rover.x} and y = ${rover.y - 1}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.y -= 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the north boundary");
      }
      break;

    case "E":
      if (rover.x < 9) {
        if (map[rover.y][rover.x + 1] !== null) {
          console.log(`The rover found something at x = ${rover.x + 1} and y = ${rover.y}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.x += 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the east boundary");
      }
      break;

    case "S":
      if (rover.y < 9) {
        if (map[rover.y + 1][rover.x] !== null) {
          console.log(`The rover found something at x = ${rover.x} and y = ${rover.y + 1}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.y += 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the south boundary");
      }
      break;

    case "W":
      if (rover.x > 0) {
        if (map[rover.y][rover.x - 1] !== null) {
          console.log(`The rover found something at x = ${rover.x - 1} and y = ${rover.y}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.x -= 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the west boundary");
      }
      break;
  }

  console.log(`The rover is at x = ${rover.x} and y = ${rover.y}`);
}

function moveBackward(rover) {
  console.log("moveBackward was called");

  rover.travelLog.push({ x: rover.x, y: rover.y });

  switch (rover.direction) {
    case "S":
      if (rover.y > 0) {
        if (map[rover.y - 1][rover.x] !== null) {
          console.log(`The rover found something at x = ${rover.x} and y = ${rover.y - 1}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.y -= 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the north boundary");
      }
      break;

    case "W":
      if (rover.x < 9) {
        if (map[rover.y][rover.x + 1] !== null) {
          console.log(`The rover found something at x = ${rover.x + 1} and y = ${rover.y}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.x += 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the east boundary");
      }
      break;

    case "N":
      if (rover.y < 9) {
        if (map[rover.y + 1][rover.x] !== null) {
          console.log(`The rover found something at x = ${rover.x} and y = ${rover.y + 1}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.y += 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the south boundary");
      }
      break;

    case "E":
      if (rover.x > 0) {
        if (map[rover.y][rover.x - 1] !== null) {
          console.log(`The rover found something at x = ${rover.x - 1} and y = ${rover.y}`);
          break;
        }
        map[rover.y][rover.x] = null;
        rover.x -= 1;
        map[rover.y][rover.x] = "rover";
      } else {
        console.log("The rover reached the west boundary");
      }
      break;
  }

  console.log(`The rover is at x = ${rover.x} and y = ${rover.y}`);
}

//Function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, (l)eft, (b)ackwards  
function executeCommands(commands, rover) {
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] !== "r" && commands[i] !== "l" && commands[i] !== "f" && commands[i] !== "b") {
      console.log(`The command ${commands[i]} is invalid!`);
      return;
    }
  }

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "r") {
      turnRight(rover);
    } else if (commands[i] === "l") {
      turnLeft(rover);
    } else if (commands[i] === "f") {
      moveForward(rover);
    } else if (commands[i] === "b") {
      moveBackward(rover);
    }
  }

  console.log(rover.travelLog);
}
