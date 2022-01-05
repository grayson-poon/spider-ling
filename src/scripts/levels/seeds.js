import Level from "../level";
import Layout from "../layout";

// wall_layouts
import { levelOne } from "./level_one";
import { levelThree } from "./level_three";
import { levelTwo } from "./level_two";

// canvas dimensions
const cW = 900;
const cH = 600;

// Level 1
let level1 = new Level({
  startingPos: [350, 250],
  layout: new Layout(levelOne),
  winZone: { x: cW - 2 - 45, y: cH - 70 - 2, width: 45, height: 70 },
  failZones: [{ x: 2, y: cH - 70 - 2, width: 45, height: 70 }],
});

// Level 2
let level2 = new Level({
  startingPos: [15, 200],
  layout: new Layout(levelTwo),
  winZone: { x: 850, y: 0.75 * cH - 70, width: 48, height: 70 },
  failZones: [
    { x: 0.2 * cW, y: cH - 25, width: 0.15 * cW, height: 25 },
    { x: 0.65 * cW, y: cH - 25, width: 0.15 * cW, height: 25 },
  ],
});

// Level 3
let level3 = new Level({
  startingPos: [cW / 2, cH / 2],
  layout: new Layout(levelThree),
  winZone: { x: cW - 2 - 45, y: cH - 70 - 2, width: 45, height: 70 },
  failZones: [
    { x: 2, y: cH - 70 - 2, width: 45, height: 70 },
  ],
});

// Export all levels //////////////////////////////////////////////////////
export const arrLevels = [
  level1,
  level2,
  level3,
];