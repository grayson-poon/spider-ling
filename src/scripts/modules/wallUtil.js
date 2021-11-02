export const wallUtil = {
  distanceBelow(player, wall) {
    return (wall.y - (player.y + player.height)); // 450
  },

  distanceToTheRight(player, wall) {
    return (wall.x - (player.x + player.width));
  },

  distanceToTheLeft(player, wall) {
    return (player.x - (wall.x + wall.width));
  },

  closestWallBelow(player, walls) {
    let possibleWalls = [];
    walls.forEach((wall) => {
      if (wall.y > player.y + player.height) {
        possibleWalls.push(wall);
      }
    });

    let closest;
    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (wall.containsPoint(player.x, player.y + player.height + dy) ||
            wall.containsPoint(player.x + player.width, player.y + player.height + dy)) {
          closest = wall;
          found = true;
        }
      });
      dy += 1;
    }

    return closest;
  },

  closestWallToTheRight(player, walls) {
    let possibleWalls = [];
    walls.forEach((wall) => {
      if (wall.x > player.x + player.width) {
        possibleWalls.push(wall);
      }
    });

    let closest;
    let found = false;
    let dx = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (wall.containsPoint(player.x + player.width + dx, player.y) ||
            wall.containsPoint(player.x + player.width + dx, player.y + player.height)) {
          closest = wall;
          found = true;
        }
      });
      dx += 1;
    }

    return closest;
  },

  closestWallToTheLeft(player, walls) {
    let possibleWalls = [];
    walls.forEach((wall) => {
      if (wall.x + wall.width < player.x) {
        possibleWalls.push(wall);
      }
    });

    let closest;
    let found = false;
    let dx = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (wall.containsPoint(player.x + dx, player.y) ||
            wall.containsPoint(player.x + dx, player.y + player.height)) {
          closest = wall;
          found = true;
        }
      });
      dx -= 1;
    }

    return closest;
  },

  collisionDetected(player, walls) {
    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];
      
      if (wall.x < player.x + player.width && // collisionRight
          wall.x + wall.width > player.x && // collisionLeft
          wall.y < player.y + player.height && // collisionBottom
          wall.y + wall.height > player.y) { // collisionTop
            return true;
          }
    }

    return false;
  }

}
