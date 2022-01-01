import { wallUtil } from "./wallUtil"

export const adjustPlayerGoingLeft = (player, arrWalls, movingRight, impulsing, tempVec) => {
  let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (
    Math.abs(distanceL) < Math.abs(player.velocityX) &&
    !movingRight &&
    !impulsing
  ) {
    console.log("hitting first case");
    player.velocityX = 0;
    player.x += player.velocityX;

  } else if (
    Math.abs(distanceL) < Math.abs(player.velocityX) &&
    !movingRight &&
    impulsing &&
    player.unitVec[0] < 0
  ) {
    console.log("hitting second case");
    player.velocityX = 0;
    player.x += player.velocityX;

  } else if (
    Math.abs(distanceL) < Math.abs(player.velocityX) &&
    !movingRight &&
    impulsing &&
    player.unitVec[0] >= 0
  ) {
    console.log(player.unitVec, "moving right due to impulse");
    // player.velocityX += (player.unitVec[0]) * player.maxImpulse;
    player.x += player.velocityX;

  } else if (distanceL === 0) {
    player.velocityX = 0;
    player.x += player.velocityX;

  } else {
    player.x += player.velocityX;
    console.log("normal behavior");
  }
}