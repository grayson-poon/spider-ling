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
