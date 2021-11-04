class Level {
  constructor(options) {
    this.startingPos = options.startingPos;
    this.layout = options.layout;
    this.arrWalls = this.layout.arrWalls;
    this.winZone = options.winZone;
    this.failZones = options.failZones;
  }

  renderLevel(ctx) {
    this.arrWalls.forEach((wall) => {
      ctx.fillStyle = 'black';
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
  }
}

export default Level;