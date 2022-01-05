import Wall from "../wall";

// canvas dimensions
const cW = 900;
const cH = 600;

export const levelOne = [
  new Wall(0, 0, cW, 2), // Ceiling wall
  new Wall(0, 0, 2, cH), // Left wall
  new Wall(cW - 2, 0, 2, cH), // Right wall
  new Wall(0, cH - 2, cW, 2), // Floor wall
  new Wall(2 + 45, cH - 2 - 100, 10, 100),
  new Wall(cW - 2 - 45 - 10, cH - 2 - 100, 10, 100),
];