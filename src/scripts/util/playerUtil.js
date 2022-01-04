import { wallUtil } from "./wallUtil"

export const playerUtil = {
  adjustNegativeX(player, arrWalls) {
    let closestWall = wallUtil.closestWallToTheLeft(player, arrWalls);
    let shortestDistance = wallUtil.distanceToTheLeft(player, closestWall);

    if (shortestDistance <= (10 ** -100)) {
      player.velocityX = -(10 ** -100);
    } else {
      if (Math.abs(shortestDistance) < Math.abs(player.velocityX)) {
        player.x -= shortestDistance + (10 ** -100);
        player.velocityX = -(10 ** -100);
      }
    }
  },

  adjustPositiveX(player, arrWalls) {
    let closestWall = wallUtil.closestWallToTheRight(player, arrWalls);
    let shortestDistance = wallUtil.distanceToTheRight(player, closestWall);

    if (shortestDistance <= (10 ** -100)) {
      player.velocityX = (10 ** -100);
    } else {
      if (
        Math.abs(shortestDistance) < Math.abs(player.velocityX)
      ) {
        player.x += shortestDistance - (10 ** -100);
        player.velocityX = (10 ** -100);
      }
    }
  },

  adjustPositiveY(player, arrWalls) {
    let closestWall = wallUtil.closestWallBelow(player, arrWalls);
    let shortestDistance = wallUtil.distanceBelow(player, closestWall);

    if (shortestDistance === 0) {
      player.jumping = false;
      player.ableToImpulse = true;
      player.impulsingCount = 0;
      player.unitVec = [0, 0];

      player.velocityY = 0;
    } else {
      if (Math.abs(shortestDistance) < Math.abs(player.velocityY)) {
        player.jumping = false;
        player.ableToImpulse = true;
        player.impulsingCount = 0;
        player.unitVec = [0, 0];

        player.y += shortestDistance;
        player.velocityY = 0;
      }
    }
  },

  adjustNegativeY(player, arrWalls) {
    let closestWall = wallUtil.closestWallAbove(player, arrWalls);
    let shortestDistance = wallUtil.distanceAbove(player, closestWall);

    if (shortestDistance === 0) {
      player.velocityY = 0;
    } else {
      if (Math.abs(shortestDistance) < Math.abs(player.velocityY)) {
        player.y -= shortestDistance;
        player.velocityY = 0;
      }
    }
  },

  adjustDiagonally(player, arrWalls) {
    let payload = wallUtil.quadrantInfoController(player, arrWalls);
    if (!payload) return;
    let { dx, dy } = payload;

    console.log("hitting here");

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
};