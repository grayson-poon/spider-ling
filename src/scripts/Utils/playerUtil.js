import { wallUtil } from "./wallUtil"

export const adjustPlayerGoingLeft = (
  player, arrWalls, movingRight, impulsing
) => {
  let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (
    Math.abs(distanceL) < Math.abs(player.velocityX) && !movingRight && !impulsing
  ) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else if (
    Math.abs(distanceL) < Math.abs(player.velocityX) && !movingRight && impulsing && player.unitVec[0] < 0
  ) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else if (
    Math.abs(distanceL) < Math.abs(player.velocityX) && !movingRight && impulsing && player.unitVec[0] >= 0
  ) {
    player.x += player.velocityX;
  } else if (distanceL === 0) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else {
    player.x += player.velocityX;
  }
}

export const adjustPlayerGoingRight = (
  player, arrWalls, movingLeft, impulsing
) => {
  let closestR = wallUtil.closestWallToTheRight(player, arrWalls);
  let distanceR = wallUtil.distanceToTheRight(player, closestR);

  if (
    Math.abs(distanceR) < Math.abs(player.velocityX) && !movingLeft && !impulsing
  ) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else if (
    Math.abs(distanceR) < Math.abs(player.velocityX) && !movingLeft && impulsing && player.unitVec[0] < 0
  ) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else if (
    Math.abs(distanceR) < Math.abs(player.velocityX) && !movingLeft && impulsing && player.unitVec[0] >= 0
  ) {
    player.x += player.velocityX;
  } else if (distanceR === 0) {
    player.velocityX = 0;
    player.x += player.velocityX;
  } else {
    player.x += player.velocityX;
  }
};

export const adjustVelocity = (
  player, arrWalls, velocity, movingRight, movingLeft, impulsing
) => {

  if (velocity[0] < 0) {
    let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
    let distanceL = wallUtil.distanceToTheLeft(player, closestL);
    adjustNegativeX(player, arrWalls, movingRight, movingLeft, impulsing, distanceL);
  }

  if (velocity[0] > 0) {
    let closestR = wallUtil.closestWallToTheRight(player, arrWalls);
    let distanceR = wallUtil.distanceToTheRight(player, closestR);
    adjustPositiveX(player, arrWalls, movingRight, movingLeft, impulsing, distanceR);
  }
}

// const adjustPositiveX = (
//   player, arrWalls, movingRight, movingLeft, impulsing, distanceL
// ) => {
//   return;
// }

// const adjustNegativeX = (
//   player, arrWalls, movingRight, movingLeft, impulsing, distanceL
// ) => {

//   if (
//     Math.abs(distanceL) < Math.abs(player.velocityX) && 
//     !movingRight || !impulsing
//   ) {
//     player.velocityX = 0;
//   }

//   if (
//     Math.abs(distanceL) < Math.abs(player.velocityX) && 
//     !movingRight &&
//     impulsing
//   ) {
//     player.velocityX = 0;
//   }
//   console.log(player.velocityX);
//   // if (
//   //   Math.abs(distanceL) < Math.abs(player.velocityX) &&
//   //   !movingRight &&
//   //   impulsing
//   // ) {
//   //   player.velocityX = 0
//   // }
// }

// adjustVeloctiy () => {} have conditionals for each (add curretn vel vector as arg to determine left or right movement)
export const adjustNegativeX = (
  player, arrWalls, movingRight, impulsing
) => {
  let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (distanceL === 0) {
    player.velocityX = 0;
  } else {
    if (
      Math.abs(distanceL) < Math.abs(player.velocityX) &&
      !movingRight &&
      !impulsing
    ) {
      // console.log("first");
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
      Math.abs(distanceR) < Math.abs(player.velocityX) &&
      !movingLeft && 
      !impulsing
    ) {
      debugger
      player.x += distanceR;
      player.velocityX = 0;
    }
  }
}
