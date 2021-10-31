// import { keyFor } from "core-js/fn/symbol";
// import Player from "./player";

// /* IMPORT ALL LAYOUTS INTO THIS FILE */
import { levelOne } from "./level_layouts/level_one";

class Level {
  constructor(ctx) {
    this.layout = levelOne;
    this.ctx = ctx;

    // this.startingPos = this.layout.
  }

  renderLevel(ctx) {
    this.layout(ctx);
  }
}

export default Level;


// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 32) {
//     generateLayout()
//   }
// })

// export default Level;