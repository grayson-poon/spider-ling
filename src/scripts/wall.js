class Wall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  containsPoint(testX, testY) {
    if (this.x <= testX &&
        testX <= this.x + this.width &&
        this.y <= testY &&
        testY <= this.y + this.height) {
          return true;
        } else {
          return false;
        }
  }
}

export default Wall;