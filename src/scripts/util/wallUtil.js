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
    let closest;
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y >= player.y + player.height) possibleWalls.push(wall);
    });

    if (possibleWalls.length === 1) closest = possibleWalls[0];
    let dy = 0;

    while (closest === undefined) {
      for (let i = 0; i < possibleWalls.length; i++) {
        let wall = possibleWalls[i];
        if (
          wall.containsPoint(player.x, player.y + player.height + dy) ||
          wall.containsPoint(
            player.x + player.width,
            player.y + player.height + dy
          )
        ) {
          closest = wall;
        }
        if (closest) break;
      };
      dy += 1;
    }

    return closest;
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
          testWall.y > closestWall.y
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
          testWall.x + testWall.width > closestWall.x + closestWall.width &&
          testWall.x + testWall.width >= 0
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

  futureCollisionDetected(player, walls, dx, dy) {
    let status = false;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];

      if (
        wall.x <= player.x + player.width + dx &&
        wall.x + wall.width >= player.x + dx &&
        wall.y <= player.y + player.height + dy &&
        wall.y + wall.height >= player.y + dy
      ) {
        status = true;
      }
    }

    return status;
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

    while (!rightEdge || !leftEdge || dy > 600) {
      for (let i = 0; i < possibleWalls.length; i++) {
        let wall = possibleWalls[i];

        if (edge === "left") {
          if (wall.containsPoint(player.x, player.y + player.height + dy)) {
            leftEdge = wall;
            found = true;
          }
        } else if (edge === "right") {
          if (
            wall.containsPoint(
              player.x + player.width,
              player.y + player.height + dy
            )
          ) {
            rightEdge = wall;
            found = true;
          }
        }

        if (rightEdge && leftEdge) break;
      };
      dy += 1;
    }

    switch (edge) {
      case "left":
        return (
          rightEdge !== leftEdge && this.distanceBelow(player, rightEdge) === 0
        );
      case "right":
        return (
          leftEdge !== rightEdge && this.distanceBelow(player, leftEdge) === 0
        );
    }
  },

  newController(player, walls) {
    switch (wallUtil.futureCollisionDetected(
      player, walls, player.velocityX, player.velocityY
    )) {
      case player.velocityX > 0 && player.velocityY < 0:
        
      case player.velocityX < 0 && player.velocityY < 0:

      case player.velocityX < 0 && player.velocityY > 0:

      case player.velocityX > 0 && player.velocityY > 0:

      case player.velocityX > 0 && player.velocityY === 0:

      case player.velocityX < 0 && player.velocityY === 0:

      case player.velocityX === 0 && player.velocityY > 0:

      case player.velocityX === 0 && player.velocityY < 0:
    }
  },

  maximumStep(player, walls) {
    let unitVec  = vecUtil.normalize([0, 0], [player.velocityX, player.velocityY]);
    let [dx, dy] = [0, 0];
    let collision = false;

    while (collision === false) {
      if (this.futureCollisionDetected(player, walls, dx, dy)) {
        collision = true;
      };

      dx += unitVec[0];
      dy += unitVec[1];
    }

    return { dx: dx - unitVec[0], dy: dy - unitVec[1] };
  }
};
