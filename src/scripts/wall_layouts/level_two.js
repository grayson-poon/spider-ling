import Wall from "../wall";

// try to get canvas and/or ctx defined in here so it can be used to lay out walls

export const levelTwo = [
  new Wall(0, 0, 900, 2), // Ceiling wall
  new Wall(0, 0, 2, 600), // Left wall
  new Wall(898, 0, 2, 600), // Right wall
  new Wall(0, 598, 900, 2), // Floor wall
  new Wall(0, 450, 100, 150),
  new Wall(200, 450, 100, 150),
  new Wall(350, 450, 75, 150),
  new Wall(180, 300, 135, 10),
  new Wall(585, 300, 135, 10)
];