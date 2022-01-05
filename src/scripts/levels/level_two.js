import Wall from "../wall";

// canvas dimensions
const cW = 900;
const cH = 600;

export const levelTwo = [
  new Wall(0, 0, cW, 2), // Ceiling wall
  new Wall(0, 0, 2, cH), // Left wall
  new Wall(cW - 2, 0, 2, cH), // Right wall
  new Wall(0, cH - 2, cW, 2), // Floor wall
  new Wall(0, 0.75 * cH, 180, 0.25 * cH),
  new Wall(0.35 * cW, 0.75 * cH, 0.3 * cW, 0.25 * cH),
  new Wall(0.8 * cW, 0.75 * cH, 0.2 * cW, 0.25 * cH),
  new Wall(0.2 * cW, 0.5 * cH, 0.15 * cW, 10),
  new Wall(0.65 * cW, 0.5 * cH, 0.15 * cW, 10),
];
