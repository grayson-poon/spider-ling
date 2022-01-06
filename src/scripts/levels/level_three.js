import Wall from "../wall";

// canvas dimensions
const cW = 900;
const cH = 600;

export const levelThree = [
  new Wall(0, 0, cW, 2), // Ceiling wall
  new Wall(0, 0, 2, cH), // Left wall
  new Wall(cW - 2, 0, 2, cH), // Right wall
  new Wall(0, cH - 2, cW, 2), // Floor wall
  new Wall(75, 0.15 * cH, cW - 150, 0.5 * cH),
  new Wall(0, cH - 50 - 2, 30, 50),
  new Wall(cW - 2 - 30, cH - 50 - 2, 30, 50),
  new Wall(cW / 2 - 30 - 30, 0.65 * cH, 30, 50),
  new Wall(cW / 2 + 30, 0.65 * cH, 30, 50),
  new Wall(cW / 2 - 30, cH - 30, 60, 30),
  new Wall(150, cH - 50 - 2, 30, 50),
  new Wall(150, 0.65 * cH, 30, 30), 
  new Wall(cW - 30 - 150, cH - 50 - 2, 30, 50),
  new Wall(cW - 30 - 150, 0.65 * cH, 30, 30),
];