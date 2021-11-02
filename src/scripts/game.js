import Player from "./player";
import { Util } from "./util";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
  }

  renderFrame(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.currentPlayer.renderPlayer(ctx)
    this.currentLevel.renderLevel(ctx);
    this.gravity();
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
    this.currentLevel = this.allLevels.shift();
  }

  gravity() {
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