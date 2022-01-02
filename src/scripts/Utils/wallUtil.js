export const wallUtil = {
  distanceBelow(player, wall) {
    return wall.y - (player.y + player.height);
  },

  distanceAbove(player, wall) {
    return player.y - (wall.y + wall.height);
  },

  distanceToTheRight(player, wall) {
    return wall.x - (player.x + player.width);
  },

  distanceToTheLeft(player, wall) {
    return player.x - (wall.x + wall.width);
  },

  velocityVectorPathController(player, walls) {
    if (player.velocityX > 0 && player.velocityY < 0) {
      return this.getQuadrantInfo(player, walls, 1);
    } else if (player.velocityX < 0 && player.velocityY < 0) {
      return this.getQuadrantInfo(player, walls, 2);
    } else if (player.velocityX < 0 && player.velocityY > 0) {
      return this.getQuadrantInfo(player, walls, 3);
    } else if (player.velocityX > 0 && player.velocityY > 0) {
      return this.getQuadrantInfo(player, walls, 4);
    } else {
      return null;
    }
  },

  getQuadrantInfo(player, walls, quadrant) {
    let found = false;
    let [dx, dy] = [player.velocityX, player.velocityY];

    walls.forEach((wall) => {
      switch(quadrant) {
        case 1:
          if (wall.containsPoint(player.x + player.width + dx, player.y + dy)) {
            found = true;
          }
          break;
        case 2:
          if (wall.containsPoint(player.x + dx, player.y + dy)) {
            found = true;
          }
          break;
        case 3:
          if (wall.containsPoint(player.x + dx, player.y + player.height + dy)) {
            found = true;
          }
          break;
        case 4:
          if (wall.containsPoint(player.x + player.width + dx, player.y + player.height + dy)) {
            found = true;
          }
          break;
      }
    });

    if (!found) return null;
    return { dx, dy };
  },

  closestWallBelow(player, walls) {
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y >= player.y + player.height) possibleWalls.push(wall);
    });

    let closest;
    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (
          wall.containsPoint(player.x, player.y + player.height + dy) ||
          wall.containsPoint(
            player.x + player.width,
            player.y + player.height + dy
          )
        ) {
          closest = wall;
          found = true;
        }
      });
      dy += 1;
    }

    return closest;
  },

  closestWallAbove(player, walls) {
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y + wall.height <= player.y) possibleWalls.push(wall);
    });

    let closest;
    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (
          wall.containsPoint(player.x, player.y + dy) ||
          wall.containsPoint(player.x + player.width, player.y + dy)
        ) {
          closest = wall;
          found = true;
        }
      });
      dy -= 1;
    }

    return closest;
  },

  closestWallToTheRight(player, walls) {
    let possibleWalls = [];
    walls.forEach((wall) => {
      if (wall.x >= player.x + player.width) possibleWalls.push(wall);
    });

    let closest;
    let found = false;
    let dx = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (
          wall.containsPoint(player.x + player.width + dx, player.y) ||
          wall.containsPoint(
            player.x + player.width + dx,
            player.y + player.height
          )
        ) {
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
      if (wall.x + wall.width <= player.x) possibleWalls.push(wall);
    });

    let closest;
    let found = false;
    let dx = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (
          wall.containsPoint(player.x + dx, player.y) ||
          wall.containsPoint(player.x + dx, player.y + player.height)
        ) {
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

      if (
        wall.x <= player.x + player.width &&
        wall.x + wall.width >= player.x &&
        wall.y <= player.y + player.height &&
        wall.y + wall.height >= player.y
      ) {
        return true;
      }
    }

    return false;
  },

  edgeHangingOff(player, walls, edge) {
    let leftEdge;
    let rightEdge;
    let possibleWalls = [];

    if (edge === "left") rightEdge = this.closestWallBelow(player, walls);
    if (edge === "right") leftEdge = this.closestWallBelow(player, walls);

    walls.forEach((wall) => {
      if (wall.y >= player.y + player.height) possibleWalls.push(wall);
    });

    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (edge === "left") {
          if (wall.containsPoint(player.x, player.y + player.height + dy)) {
            leftEdge = wall;
            found = true;
          }
        } else if (edge === "right") {
          if (wall.containsPoint(player.x + player.width, player.y + player.height + dy)) {
            rightEdge = wall;
            found = true;
          }
        }
      });
      dy += 1;
    }

    switch(edge) {
      case "left":
        return rightEdge !== leftEdge && this.distanceBelow(player, rightEdge) === 0;
      case "right":
        return leftEdge !== rightEdge && this.distanceBelow(player, leftEdge) === 0;
    }
  },
};
