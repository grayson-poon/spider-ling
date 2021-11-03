export const vecUtil = {
  vecMagnitude(startPos, endPos) {
    return (Math.sqrt(((endPos[1] - startPos[1]) ** 2) + ((endPos[0] - startPos[0]) ** 2)));
  },

  normalize(playerPos, clickPos) {
    let vector = [clickPos[0] - playerPos[0], clickPos[1] - playerPos[1]];
    let magnitude = vecUtil.vecMagnitude(playerPos, clickPos);

    let unitX = (1 / magnitude) * vector[0];
    let unitY = (1 / magnitude) * vector[1];

    return [unitX, unitY];
  }
}