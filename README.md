# Spider-ling

## Live-Link:

[spider-ling](https://grayson-poon.github.io/spider-ling/)

## Background:

Spider-ling is an implementation of a level-based game, in which a user-controlled character must move from a starting position to an ending position to complete/pass the level. The user then advances to a subsequent level of harder difficulty to pass. The user can run around, jump, and boost around the game view.

As of now, this game will not include the use of any external libraries or engine to model the game physics properties, as these will be implemented as properties of the various objects in the game. Due to this, different game physics properties can be added to objects in the game in future updates, which will add a sense of robustness and customizability to the game itself. Spider-ling is hosted on GitHub Pages.

## Functionality and MVPs:

In Spider-ling, users will be able to:

* Start, pause, and restart the current level
* Move around the game view by pressing certain keyboard characters
* Jump and launch from one location to another
* Choose where they want to launch to by clicking on the game view relative to the player

In addition, this project will include:

* Instructions/controls for how to play the game
* A production README

## Webframe:

![alt text](https://github.com/grayson-poon/spider-ling/blob/main/assets/webframe.jpg)

## Technologies, Libraries, and APIs:

This project will be implemented with the following technologies:

* Canvas API to render the game view
* Webpack to transpile the source JavaScript code
* GitHub Pages as the web platform to host the application
* npm to manage project dependencies

## Implementation Timeline:

* 10/29/2021 - 10/31/2021: Setup project, by getting Webpack and Canvas running. Familiarize myself with the Canvas API. Create a Player class and get the canvas rendered with a generic playing environment and borders. Get an HTML element on the canvas to move with user input on the keyboard. Start playing around with basic physics logic such as collisions if possible.

* 11/01/2021: Begin implementing physics game logic, such as gravity in 1D, collisions, and impulses via click events from the mouse and spacebar. Further tune the movement, collision and border properties of the object and the canvas.

* 11/02/2021: Work on the animation of shooting webs in the direction of the mouse click event. Further tune the physics properties of the game.

* 11/03/2021: Focus on overall styling of the game and player instance. Work on implementing other levels that consist of new border properties if the first level is completed and fully ready.

* 11/04/2021: Fix any remaining bugs and finish styling. Deploy to GitHub Pages.

## Bonus Features:

There are a lot of physics attributes that can be added in this game. Ones that show promise to add a new level of complexity to the game are:

* Point objects that will produce effects of gravity in two-dimensions
* Local areas of gravity change
* Randomly colliding objects that must be avoided