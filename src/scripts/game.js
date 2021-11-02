import Level from "./level";
import Player from "./player";
import { Util } from "./util";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
  }

  renderFrame(ctx) {
    this.gravity();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.currentLevel.renderLevel(ctx);
    this.currentPlayer.renderPlayer(ctx)
  }

  
  completedLevel() {
    if (this.currentPlayer.inWinZone(this.currentLevel.layout)) {
      // render the next level or the congratulations page
    }
  }

  failedLevel() {
    if (this.currentPlayer.inFailZone(this.currentLevel.layout)) {
      // render the fail page with buttons to restart or quit
    }
  }
  
  nextLevel() {
    this.currentLevel.layout = this.allLevels.shift();
  }

  gravity() { // if the distance between player coordinates and wall in the y direction is > this.velocity, turn on gravity
    let walls = this.currentLevel.arrWalls;
    let possibleWalls = [];

    walls.forEach((wall) => {
      if (wall.y > this.currentPlayer.y + this.currentPlayer.height) possibleWalls.push(wall);
    })

    let closest = Util.closestWall(this.currentPlayer, possibleWalls);
    
    if (Util.distanceY(this.currentPlayer, closest) > this.currentPlayer.velocity) {
      this.currentPlayer.y += this.currentPlayer.velocity;
      this.currentPlayer.velocity += this.currentPlayer.acceleration;
    }

    // if (!this.collisionDetection() && status) {
    //   this.currentPlayer.y += this.currentPlayer.velocity;
    //   this.currentPlayer.velocity += this.currentPlayer.acceleration;
    // } else {
    //   status = false;
    // }
  }

  collisionDetection() {
    let player = this.currentPlayer;
    let walls = this.currentLevel.arrWalls;

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];
      
      if (wall.x < player.x + player.width && // collisionRight
          wall.x + wall.width > player.x && // collisionLeft
          wall.y < player.y + player.height && // collisionBottom
          wall.y + wall.height > player.y) { // collisionTop
            return true;
          }
    }
    return false;
  }
}

export default Game;