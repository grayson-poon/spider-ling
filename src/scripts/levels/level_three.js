import Wall from "../wall";

// canvas dimensions
const cW = 900;
const cH = 600;

export const levelThree = [
  new Wall(0, 0, cW, 2), // Ceiling wall
  new Wall(0, 0, 2, cH), // Left wall
  new Wall(cW - 2, 0, 2, cH), // Right wall
  new Wall(0, cH - 2, cW, 2), // Floor wall
  new Wall(0, 0.75 * cH, 100, 0.25 * cH),
  new Wall(200, 0.75 * cH, 100, 0.25 * cH),
  new Wall(350, 0.75 * cH, 75, 0.25 * cH),
  new Wall(0.2 * cW, 0.5 * cH, 0.15 * cW, 10),
  new Wall(0.65 * cW, 0.5 * cH, 0.15 * cW, 10),
];