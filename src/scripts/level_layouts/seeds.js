// create an array of new level/layout instances
// export this to the index file and pass in as arg to new Game(arr_instances)

// import all level_layouts HERE
import { levelOne } from "./level_one";

// import classes
import Level from "../level";
import Layout from "../layout";

// Layout A - Level 1
let layoutA = new Layout(
  [0, 0],
  levelOne,
  {x1: 800, y1: 350, x2: 900, y2: 450},
  [
    {x1: 160, y1: 520, x2: 310, y2: 600},
    {x1: 570, y1: 520, x2: 710, y2: 600}
  ] 
);

let level1 = new Level(layoutA);

export const arrLevels = [
  level1
];

