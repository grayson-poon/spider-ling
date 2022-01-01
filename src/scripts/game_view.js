import Game from "./game";
import { arrLevels } from "./wall_layouts/seeds";
import { addMenubarListeners } from "./event_handlers/new_menubar_listeners";


class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(arrLevels);

    addMenubarListeners(this, this.game);
  }

  loop() {
    let player = this.game.player;
    let controller = this.game.player.controller;

    if (controller.left) player.velocityX -= 0.5;
    if (controller.right) player.velocityX += 0.5;
    if (controller.jumping && player.jumping === false) {
      player.velocityY -= 20;
      player.jumping = true;
    }

    // adjustBoundsOfPlayer(player);

    window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default GameView;