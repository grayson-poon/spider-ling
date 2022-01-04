export const vecUtil = {
  vecMagnitude(startPos, endPos) {
    return (Math.sqrt(((endPos[1] - startPos[1]) ** 2) + ((endPos[0] - startPos[0]) ** 2)));
  },

  normalize(playerPos, clickPos) {
    let vector = [clickPos[0] - playerPos[0], clickPos[1] - playerPos[1]];
    let magnitude = this.vecMagnitude(playerPos, clickPos);

    let unitX = (1 / magnitude) * vector[0];
    let unitY = (1 / magnitude) * vector[1];

    return [unitX, unitY];
  },

  radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  },

  angleOfVelocity(unitVec) {
    let [velocityX, velocityY] = unitVec;
    if (velocityY === 0) return;
    
    let angleInRad = Math.atan2(Math.abs(velocityY), Math.abs(velocityX));
    let angleInDeg = this.radiansToDegrees(angleInRad);

    switch(true) {
      case velocityX > 0 && velocityY < 0:
        return angleInDeg;
      case velocityX < 0 && velocityY < 0:
        return 180 - angleInDeg;
      case velocityX < 0 && velocityY > 0:
        return 180 + angleInDeg;
      case velocityX > 0 && velocityY > 0:
        return 360 - angleInDeg;
    }
  },
}