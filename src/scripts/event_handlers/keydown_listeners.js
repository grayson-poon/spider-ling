import { wallUtil } from "../Utils/wallUtil";

export default function addKeydownEventListeners(player, level, pauseStatus) {
  addKeydownListener(player, level, pauseStatus);
}

function addKeydownListener(player, level, pauseStatus) {
  if (pauseStatus === false) {
    document.addEventListener("keydown", handleKeydown(player, level, pauseStatus));
  } else {
    document.removeEventListener("keydown", handleKeydown(player, level, pauseStatus));
  }
}

function handleKeydown(player, level, pauseStatus) {
  return function(event) {
    if (pauseStatus) return;
    event.stopPropagation();
    event.preventDefault();

    const key = event.keyCode;
    if (key === 65) {
      handleLeftKey(player, level);
    } else if (key === 68) {
      handleRightKey(player, level)
    } else if (key === 32) {
      handleSpacebarKey(player, level);
    }
  }
}

function handleLeftKey(player, level) {
  let closestL = wallUtil.closestWallToTheLeft(player, level.arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (distanceL === 1) {
    return
  } else if (distanceL > player.velocity) {
    player.left();
  } else {
    player.x -= (distanceL - 1);
  }
}

function handleRightKey(player, level) {
  let closestR = wallUtil.closestWallToTheRight(player, level.arrWalls);
  let distanceR = wallUtil.distanceToTheRight(player, closestR);

  if (distanceR === 1) {
    return
  } else if (distanceR > player.velocity) {
    player.right();
  } else {
    player.x += (distanceR - 1);
  }
}

function handleSpacebarKey(player, level) {
  let closestB = wallUtil.closestWallBelow(player, level.arrWalls);
  let distanceB = wallUtil.distanceBelow(player, closestB);
  
  if (distanceB > 2) {
    player.jumping = true;
    return
  } else {
    player.jumping = true;
    player.jump();
  }
}