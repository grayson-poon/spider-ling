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

  quadrantInfoController(player, walls) {
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
    let testWall;
    let closestWall;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (wall.y >= player.y + player.height) {
        if (!closestWall) closestWall = wall;
        testWall = wall;

        if (
          ((wall.x > player.x &&
            wall.x + wall.width < player.x + player.width) ||
            (wall.x < player.x &&
            wall.x + wall.width > player.x + player.width) ||
            (wall.x + wall.width > player.x &&
            wall.x < player.x + player.width)) &&
          testWall.y < closestWall.y
        ) {
          closestWall = testWall;
        }
      }
    }
    return closestWall;
  },

  closestWallAbove(player, walls) {
    let testWall;
    let closestWall;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (wall.y + wall.height <= player.y) {
        if (!closestWall) closestWall = wall;
        testWall = wall;

        if (
          ((wall.x > player.x &&
            wall.x + wall.width < player.x + player.width) ||
            (wall.x < player.x && 
            wall.x + wall.width > player.x + player.width) ||
            (wall.x + wall.width > player.x &&
            wall.x < player.x + player.width)) &&
          testWall.y + testWall.height > closestWall.y + closestWall.height
        ) {
          closestWall = testWall;
        }
      }
    }
    return closestWall;
  },

  closestWallToTheRight(player, walls) {
    let testWall;
    let closestWall;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (wall.x >= player.x + player.width) {
        if (!closestWall) closestWall = wall;
        testWall = wall;

        if (
          ((wall.y + wall.height > player.y && 
            wall.y < player.y + player.height) ||
            (wall.y > player.y && 
            wall.y < player.y + player.height) ||
            (wall.y < player.y &&
            wall.y + wall.height > player.y + player.height)) &&
          testWall.x < closestWall.x
        ) {
          closestWall = testWall;
        }
      }
    }
    return closestWall;
  },

  closestWallToTheLeft(player, walls) {
    let testWall;
    let closestWall;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (wall.x + wall.width <= player.x) {
        if (!closestWall) closestWall = wall;
        testWall = wall;

        if (
          ((wall.y + wall.height > player.y &&
            wall.y < player.y + player.height) ||
            (wall.y > player.y && 
            wall.y < player.y + player.height) ||
            (wall.y < player.y &&
            wall.y + wall.height > player.y + player.height)) &&
          testWall.x + testWall.width > closestWall.x + closestWall.width
        ) {
          closestWall = testWall;
        }
      }
    }
    return closestWall;
  },

  currentCollisionDetected(player, walls) {
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

  futureCollisionDetected(player, walls) {
    let status = false;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (
        wall.x <= player.x + player.width + player.velocityX &&
        wall.x + wall.width >= player.x + player.velocityX &&
        wall.y <= player.y + player.height + player.velocityY &&
        wall.y + wall.height >= player.y + player.velocityY
      ) {
        status = true;
      }
    }

    return status;
  },
};
