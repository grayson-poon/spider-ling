import Game from "./game";
import { arrLevels } from "./levels/seeds";
import { addMenubarListeners } from "./event_handlers/menubar_listeners";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(arrLevels);

    addMenubarListeners(this, this.game);
  }

  loop() {
    if (this.game.won) {
      this.game.removeKeydownListeners();
      return;
    } else if (this.game.failed) {
      this.game.removeKeydownListeners();
      this.game = null;
      document.getElementById("fail-container").style.visibility = "visible";
      return;
    } else if (!this.game.pauseStatus) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.game.player.draw(this.ctx);
      this.game.currentLevel.draw(this.ctx);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }
}