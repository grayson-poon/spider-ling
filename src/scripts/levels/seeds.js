import Level from "../level";
import Layout from "../layout";

// wall_layouts
import { levelOne } from "./level_one";
import { levelTwo } from "./level_two";
import { levelThree } from "./level_three";
import { levelFour } from "./level_four";

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
  startingPos: [cW / 2 - 15, 10],
  layout: new Layout(levelThree),
  winZone: { x: cW / 2 - 30, y: 0.65 * cH, width: 60, height: 30 },
  failZones: [
    { x: 30, y: cH - 15 - 2, width: 120, height: 15 },
    { x: cW - 30 - 120, y: cH - 15 - 2, width: 120 - 2, height: 15 },
    { x: 180, y: cH - 15 - 2, width: 240, height: 15 },
    { x: cW - 240 - 180, y: cH - 15 - 2, width: 240, height: 15 },
  ],
});

// Export all levels //////////////////////////////////////////////////////
export const arrLevels = [
  level1,
  level2,
  level3,
];