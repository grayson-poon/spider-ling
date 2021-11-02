import Level from "../level";
import Layout from "../layout";

// import wall_layouts HERE
import { levelOne } from "./level_one";

// Level 1
let level1 = new Level(
  [350, 250],
  new Layout(levelOne),
  {x1: 800, y1: 350, x2: 900, y2: 450},
  [
    {x1: 160, y1: 520, x2: 310, y2: 600},
    {x1: 570, y1: 520, x2: 710, y2: 600}
  ]
);

// Final arrLevels Export //////////////////////////////////////////////////////
export const arrLevels = [
  level1
];

