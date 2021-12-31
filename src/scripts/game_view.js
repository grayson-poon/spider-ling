import addMenubarEventListeners from "./event_handlers/menubar_listeners";
import addKeydownEventListeners from "./event_handlers/keydown_listeners";
import addClickEventListeners from "./event_handlers/click_listeners";
import { handleInstructions, handleRestart, handleStart } from "./event_handlers/new_menubar_listeners";

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;

    this.canvas = this.ctx.canvas;
    this.player = this.game.currentPlayer;
    this.level = this.game.currentLevel;

    this.animate = this.animate.bind(this);

    handleStart(this, this.game);
    handleRestart(this.game);
    handleInstructions(this, this.game);

    addKeydownEventListeners(this.player, this.level, this.game.pauseStatus);
    addClickEventListeners(this.ctx.canvas, this.player);
  }

  animate() {
    if (this.game.pauseStatus === false) {
      this.game.renderFrame(this.ctx);
      window.requestAnimationFrame(this.animate);
    }
  }

  start() {
    window.requestAnimationFrame(this.animate);
  }
}

export default GameView;