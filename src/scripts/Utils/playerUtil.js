import { wallUtil } from "./wallUtil"

export const adjustNegativeX = (
  player, arrWalls, movingRight, impulsing
) => {
  let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (distanceL === 0) {
    player.velocityX = 0;
  } else {
    if (
      Math.abs(distanceL) < Math.abs(player.velocityX) ||
      Math.abs(distanceL) < 0.45 &&
      !impulsing
    ) {
      player.x -= distanceL;
      player.velocityX = 0;
    }
  }
}

export const adjustPositiveX = (
  player, arrWalls, movingLeft, impulsing
) => {
  let closestR = wallUtil.closestWallToTheRight(player, arrWalls);
  let distanceR = wallUtil.distanceToTheRight(player, closestR);

  if (distanceR === 0) {
    player.velocityX = 0;
  } else {
    if (
      Math.abs(distanceR) < Math.abs(player.velocityX) ||
      Math.abs(distanceR) < 0.45 &&
      !impulsing
    ) {
      player.x += distanceR;
      player.velocityX = 0;
    }
  }
}

export const adjustPositiveY = (
  player, arrWalls, jumping, impulsing
) => {
  let closestB = wallUtil.closestWallBelow(player, arrWalls);
  let distanceB = wallUtil.distanceBelow(player, closestB);

  if (distanceB === 0) {
    player.jumping = false;
    player.velocityY = 0;
  } else {
    if (
      Math.abs(distanceB) < Math.abs(player.velocityY) ||
      Math.abs(distanceB) < 0.9 &&
      (!impulsing || !jumping)
    ) {
      player.y += distanceB;
      player.velocityY = 0;
    }
  }
}

export const adjustNegativeY = (
  player, arrWalls, jumping, impulsing
) => {
  let closestA = wallUtil.closestWallAbove(player, arrWalls);
  let distanceA = wallUtil.distanceAbove(player, closestA);

  if (distanceA === 0) {
    player.velocityY = 0;
  } else {
    if (Math.abs(distanceA) < Math.abs(player.velocityY) ||
      Math.abs(distanceA) < 0.9
    ) {
      player.y -= distanceA;
      player.velocityY = 0;
    }
  }
}