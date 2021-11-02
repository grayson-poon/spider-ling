class Wall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export default Wall;

// run the object collision functions inside the game, if player's coords overlap with wall instance coords, stop movement
// refactor level/layout/game/gameview classes to account for array of wall objects
