import Level from "../level";
import Layout from "../layout";

// wall_layouts
import { levelOne } from "./level_one";
import { levelTwo } from "./level_two";
import { levelThree } from "./level_three";

// Level 1
let level1 = new Level({
  startingPos: [350, 250],
  layout: new Layout(levelOne),
  winZone: {x: 800, y: 350, width: 100, height: 100},
  failZones: [
    {x: 160, y: 520, width: 150, height: 80},
    {x: 570, y: 520, width: 150, height: 80}
  ]
});

// Level 2
let level2 = new Level({
  startingPos: [15, 200],
  layout: new Layout(levelTwo),
  winZone: {x: 800, y: 350, width: 100, height: 100},
  failZones: [
    {x: 160, y: 520, width: 150, height: 80},
    {x: 570, y: 520, width: 150, height: 80}
  ]
});

// Level 3
let level3 = new Level({
  startingPos: [15, 200],
  layout: new Layout(levelThree),
  winZone: { x: 800, y: 350, width: 100, height: 100 },
  failZones: [
    { x: 160, y: 520, width: 150, height: 80 },
    { x: 570, y: 520, width: 150, height: 80 },
  ],
});

// Export all levels //////////////////////////////////////////////////////
export const arrLevels = [
  level1,
  level2,
  level3,
];