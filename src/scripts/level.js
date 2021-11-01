// import { keyFor } from "core-js/fn/symbol";
// import Player from "./player";

// /* IMPORT ALL LAYOUTS INTO THIS FILE */
import { levelOne } from "./level_layouts/level_one";

class Level {
  constructor(layout_instance) {
    // this.layout = layout_instance
    this.layout = levelOne;
    this.allLayouts = [];
    this.allLayouts.push(levelOne);
    this.winZone = [];
    

    // 
  }

  renderLevel(ctx) {
    this.layout(ctx);
  }

  winZone() {

  }
}

export default Level;