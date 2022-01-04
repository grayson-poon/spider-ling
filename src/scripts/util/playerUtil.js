import { vecUtil } from "./vecUtil";
import { wallUtil } from "./wallUtil"

export const playerUtil = {
  adjustNegativeX(player, arrWalls, movingRight, impulsing, jumping) {
    // let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
    // let distanceL = wallUtil.distanceToTheLeft(player, closestL);

    // if (distanceL <= 10 ** -100) {
    //   if (!wallUtil.edgeHangingOff(player, arrWalls, "right")) {
    //     player.velocityX = -(10 ** -100);
    //   }
    // } else {
    //   if (
    //     Math.abs(distanceL) < Math.abs(player.velocityX)
    //     // Math.abs(distanceL) < 0.45 &&
    //     // !impulsing
    //   ) {
    //     player.x -= distanceL + 10 ** -100;
    //     player.velocityX = -(10 ** -100);
    //   }
    // }

    // debugger

    let testDistance;
    let shortestDistance;

    for (let i = 0; i < arrWalls.length; i++) {
      let wall = arrWalls[i];

      if (wall.x + wall.width <= player.x) {
        testDistance = wallUtil.distanceToTheLeft(player, wall);
        if (!shortestDistance && shortestDistance !== 0) {
          shortestDistance = wallUtil.distanceToTheLeft(player, wall);
        }

        if (
          ((wall.y + wall.height > player.y &&
            wall.y < player.y + player.height) ||
            (wall.y > player.y && 
            wall.y < player.y + player.height) ||
            (wall.y < player.y && 
            wall.y + wall.height > player.y + player.height)) &&
          testDistance < shortestDistance &&
          testDistance >= 0
        ) {
          shortestDistance = testDistance;
        }
        if (shortestDistance === 0) break;
      }
    }

    if (shortestDistance <= 10 ** -100) {
      if (!wallUtil.edgeHangingOff(player, arrWalls, "right")) {
        player.velocityX = -(10 ** -100);
      }
    } else {
      if (Math.abs(shortestDistance) < Math.abs(player.velocityX)) {
        player.x -= shortestDistance + (10 ** -100);
        player.velocityX = -(10 ** -100);
      }
    }
  },

  adjustPositiveX(player, arrWalls, movingLeft, impulsing) {
    let closestR = wallUtil.closestWallToTheRight(player, arrWalls);
    let distanceR = wallUtil.distanceToTheRight(player, closestR);

    if (distanceR <= (10 ** -100)) {
      if (!wallUtil.edgeHangingOff(player, arrWalls, "left")) {
        player.velocityX = 10 ** -100;
      }
    } else {
      if (
        Math.abs(distanceR) < Math.abs(player.velocityX)
        // Math.abs(distanceR) < 0.45 &&
        // !impulsing
      ) {
        player.x += distanceR - (10 ** -100);
        player.velocityX = 10 ** -100;
      }
    }
  },

  adjustPositiveY(player, arrWalls, jumping, impulsing) {
    let closestB = wallUtil.closestWallBelow(player, arrWalls);
    let distanceB = wallUtil.distanceBelow(player, closestB);

    if (distanceB === 0) {
      player.jumping = false;
      player.ableToImpulse = true;
      player.impulsingCount = 0;
      player.unitVec = [0, 0];

      player.velocityY = 0;
    } else {
      if (
        Math.abs(distanceB) < Math.abs(player.velocityY)
        // Math.abs(distanceB) < 0.9 &&
        // (!impulsing || !jumping)
      ) {
        player.jumping = false;
        player.ableToImpulse = true;
        player.impulsingCount = 0;
        player.unitVec = [0, 0];

        player.y += distanceB;
        player.velocityY = 0;
      }
    }
  },

  adjustNegativeY(player, arrWalls, jumping, impulsing) {
    let closestA = wallUtil.closestWallAbove(player, arrWalls);
    let distanceA = wallUtil.distanceAbove(player, closestA);

    if (distanceA === 0) {
      player.velocityY = 0;
    } else {
      if (
        Math.abs(distanceA) < Math.abs(player.velocityY) ||
        Math.abs(distanceA) < 0.9
      ) {
        player.y -= distanceA;
        player.velocityY = 0;
      }
    }
  },

  adjustDiagonally(player, arrWalls) {
    let payload = wallUtil.velocityVectorPathController(player, arrWalls);
    if (!payload) return;
    let { dx, dy } = payload;

    if (Math.abs(dx) >= Math.abs(dy)) {
      player.y += dy;

      if (dx > 0) this.adjustPositiveX(player, arrWalls);
      if (dx < 0) this.adjustNegativeX(player, arrWalls);
    } else {
      player.x += dx;

      if (dy > 0) this.adjustPositiveY(player, arrWalls);
      if (dy < 0) this.adjustNegativeY(player, arrWalls);
    }
  },

  adjustStep(player, arrWalls) {
    if (
      wallUtil.futureCollisionDetected(player, arrWalls, player.velocityX, player.velocityY) &&
      !wallUtil.currentCollisionDetected(player, arrWalls)
    ) {
      let { dx, dy } = wallUtil.maximumStep(player, arrWalls);
      console.log({dx, dy}, "one step too far");

      player.x += dx;
      player.y += dy;

      if (dx > 0) player.velocityX = (10 ** -100);
      if (dx < 0) player.velocityX = -(10 ** -100);
      player.velocityY = 0;
    }
  },
};