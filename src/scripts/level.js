export default class Level {
  constructor(options) {
    this.level = options.level;
    this.startingPos = options.startingPos;
    this.layout = options.layout;
    this.arrWalls = this.layout.arrWalls;
    this.winZone = options.winZone;
    this.failZones = options.failZones;
  }

  draw(ctx) {
    this.arrWalls.forEach((wall) => {
      ctx.fillStyle = "black";
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

    ctx.globalAlpha = 0.5;

    this.failZones.forEach((zone) => {
      ctx.fillStyle = "orange";
      ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
    });

    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.fillRect(
      this.winZone.x,
      this.winZone.y,
      this.winZone.width,
      this.winZone.height
    );

    ctx.globalAlpha = 1.0;

    if (this.level === 0) {
      ctx.fillStyle = "black";
      ctx.font = "24px Arial";
      ctx.fillText("Try out your Spidey movements here!", 275, 100);
      ctx.font = "18px Arial";
      ctx.fillText("If you ever forget how to move, use the menubar on the right to view game controls!", 125, 135);
    }
  }
}