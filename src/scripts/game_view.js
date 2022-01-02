import Game from "./game";
import { arrLevels } from "./levels/seeds";
import { addMenubarListeners } from "./event_handlers/menubar_listeners";

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(arrLevels);

    addMenubarListeners(this, this.game);
  }

  loop() {
    if (!this.game.pauseStatus) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.game.player.draw(this.ctx);
      this.game.currentLevel.draw(this.ctx);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default GameView;