import { vecUtil } from "./vecUtil";

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

  distanceInVelocityDirection(player, wall) {
    return 
  },

  velocityVectorPathController(player, walls) {
    if (player.velocityX > 0 && player.velocityY < 0) {
      return this.firstQuadrantInfo(player, walls);
    } else if (player.velocityX < 0 && player.velocityY < 0) {
      return this.secondQuadrantInfo(player, walls);
    } else if (player.velocityX < 0 && player.velocityY > 0) {
      // console.log(this.thirdQuadrantInfo(player, walls), "THIRD QUAD");
      return this.thirdQuadrantInfo(player, walls);
    } else if (player.velocityX > 0 && player.velocityY > 0) {
      return this.fourthQuadrantInfo(player, walls);
    } else {
      return null;
    }
  },

  firstQuadrantInfo(player, walls) {
    let closest;
    let found = false;
    let [dx, dy] = [player.velocityX, player.velocityY];

    walls.forEach((wall) => {
      if (wall.containsPoint(player.x + player.width + dx, player.y + dy)) {
        closest = wall;
        found = true;
      }
    });
    if (!found) return null;

    return {
      closestV: closest,
      distanceV: vecUtil.vecMagnitude(
        [0, 0],
        [player.velocityX, player.velocityY]
      ),
      dx,
      dy,
    };
  },

  secondQuadrantInfo(player, walls) {
    let closest;
    let found = false;
    let [dx, dy] = [player.velocityX, player.velocityY];

    walls.forEach((wall) => {
      if (wall.containsPoint(player.x + dx, player.y + dy)) {
        closest = wall;
        found = true;
      }
    });
    if (!found) return null;

    return {
      closestV: closest,
      distanceV: vecUtil.vecMagnitude(
        [0, 0],
        [player.velocityX, player.velocityY]
      ),
      dx,
      dy,
    };
  },

  thirdQuadrantInfo(player, walls) {
    let closest;
    let found = false;
    let [dx, dy] = [player.velocityX, player.velocityY];

    walls.forEach((wall) => {
      if (wall.containsPoint(player.x + dx, player.y + player.height + dy)) {
        closest = wall;
        found = true;
      }
      // console.log(dx, "dx", dy, "dy");
    });
    if (!found) return null;

    // console.log(closest, "CLOSEST");

    return {
      closestV: closest,
      distanceV: vecUtil.vecMagnitude([0,0], [player.velocityX, player.velocityY]),
      dx,
      dy,
    };
  },

  fourthQuadrantInfo(player, walls) {
    let closest;
    let found = false;
    let [dx, dy] = [player.velocityX, player.velocityY];

    walls.forEach((wall) => {
      if (wall.containsPoint(player.x + player.width + dx, player.y + player.height + dy)) {
        closest = wall;
        found = true;
      }
    });
    if (!found) return null;

    return {
      closestV: closest,
      distanceV: vecUtil.vecMagnitude(
        [0, 0],
        [player.velocityX, player.velocityY]
      ),
      dx,
      dy,
    };
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

  leftEdgeHangingOff(player, walls) {
    let rightEdge = this.closestWallBelow(player, walls);
    let leftEdge;
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y >= player.y + player.height) possibleWalls.push(wall);
    });

    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (wall.containsPoint(player.x, player.y + player.height + dy)) {
          leftEdge = wall;
          found = true;
        }
      });
      dy += 1;
    }

    return (
      rightEdge !== leftEdge && this.distanceBelow(player, rightEdge) === 0
    );
  },

  rightEdgeHangingOff(player, walls) {
    let leftEdge = this.closestWallBelow(player, walls);
    let rightEdge;
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y >= player.y + player.height) possibleWalls.push(wall);
    });

    let found = false;
    let dy = 0;

    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (
          wall.containsPoint(
            player.x + player.width,
            player.y + player.height + dy
          )
        ) {
          rightEdge = wall;
          found = true;
        }
      });
      dy += 1;
    }

    return leftEdge !== rightEdge && this.distanceBelow(player, leftEdge) === 0;
  },
};
