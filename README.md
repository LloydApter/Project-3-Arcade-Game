<img src=https://raw.githubusercontent.com/LloydApter/Project-3-Arcade-Game/master/images/players/char-pink-girl.png>

# Classic Arcade Game Clone Project

## OverView

This is a simple game built around the classic frogger type game.  The player needs to cross the road which has bugs crawling across it without squashing them (squish!).  After the first succussful crossing from the grass over road of bugs to the river the player gets the option to capture gems and other features and win lives and points.  Don't collect the ROCK that will take away lives and score!

## Game Screen Shot on iPhone 6/7/8 Size Screens


<img src=https://raw.githubusercontent.com/LloydApter/Project-3-Arcade-Game/master/images/game-screenshot.png>


## Table of Contents


- [Installation](#installation)
- [Clone](#clone)
- [Setup](#setup)
- [Features](#features)
- [Team](#team)
- [FAQ](#FAQ)
- [Contact me](#contact-me)
- [License](#license)
- [Instructions](#instructions)



---

## Installation

- The is a JavaScript browser game so no installation required other than uploading to a sever.
- To play this on your computer just open the index.html file in your favorite browser, ideally Chrome or Firefox or Edge as these all support ES6 JavaScript.


### Clone

- Clone this repo to your local machine using `https://github.com/LloydApter/Project-3-Arcade-Game.git`


### Setup

- As mentioned above, there is no special setup required as the game us built without libraries using vanilla JavaScript.  The ticker CSS I found as a tutorial on Code Boxx, here is the link to check it out <a href=https://code-boxx.com/html-css-news-ticker-horizontal-vertical/>Code Boxx</a>, so full credit and thanks to Code Boxx for the CSS ticker code.
---


## Features

The game is build using Javacript classes on a Javascript ```canvas```.  There are three many classes, one for players, another for enemies and another for features.  There are a few functions that monitor game *incidents* like collisions with bugs *the enemies*, collecting *features* and the start, restart and select player functions.  The game ```engine.js``` which provides the canvas and constant update functionality is provided by Udacity with start code the app.js and index.html as well. My job was to activate the game. 


---


## Team

- Just me and the kind help of our great instuctors and fellow students at Udacity!


---

## FAQ

- **How do I *play* the game?**
    - Click on the START GAME button in the game footer.

- **How do I *select an avator*?**
    - Click on the SELECT PLAYER button in the game footer

- **How do I *earn points*?**
    - You can earn points, lives, gems and wins.

- **How does the *game end?**
    - You start with three lives and once you have zero lives the game is over.

- **How do I earn *special points*?**
    - AFter the first sucessful crosssing you will see special features *gems, hearts, golden keys* appear on the screen.  Collect these features and their special points (lives and score points) by going over them.

- **How do I earn *lose points*?**
    - There are two ways to lose points. Squashing a bug costs you a life and going into the *special feature Rock* costs you a life and score points.


---

## Contact me

Reach out to me at one of the following places!

- Website at <a href="https://managesoft.co.il" target="_blank">`managesoft.co.il`</a>
- Twitter at <a href="https://twitter.com/msptweets" target="_blank">`@msptweets`</a>
- Insert more social links here.


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**



## Instructions (as provided by Udacity)

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing (as provided by Udacity)

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
