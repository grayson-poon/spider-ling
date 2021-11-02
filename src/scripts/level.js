class Level {
  constructor(startingPos, layout, winZone, failZonesArr) {
    this.startingPos = startingPos;
    this.layout = layout;
    this.arrWalls = layout.arrWalls;
    this.winZone = winZone;
    this.failZonesArr = failZonesArr;
  }

  renderLevel(ctx) {
    this.arrWalls.forEach((wall) => {
      ctx.fillStyle = 'black';
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
  }
}

export default Level;