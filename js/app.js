
// Enemies our player must avoid
class Enemy {
    constructor(dx, dy) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.sx = 1;
        this.sy = 76;
        this.sWidth = 99;
        this.sHeight = 69;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = 99;
        this.dHeight = 69;
        this.width = 101;
        this.height = 171;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        if (this.dx < 505) {
            this.s = Math.random() * 300;
            this.dx = this.dx + this.s * dt;
        }
        else if (this.dx > 505) {
            this.dx = 0;
        }
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
    }
}



// Now write your own player class
class Player {
    constructor(dx, dy, event) {
        this.sprite = 'images/players/char-boy.png';
        this.h = 101;
        this.v = 80;
        this.sx = 19;
        this.sy = 59;
        this.sWidth = 69;
        this.sHeight = 76;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = 69;
        this.dHeight = 76;
        this.lives = 3;
        this.score = 0;
        this.wins = 0;
        this.gems = 0;
        this.won = false;
        this.collision = false;
        this.collection = false;
        this.restart = false;
        this.avatarSwitch = false;
        this.tickerScore = document.getElementById("ticker-score");
        this.tickerWins = document.getElementById("ticker-won");
        this.tickerLives = document.getElementById("ticker-lives");
        this.tickerGems = document.getElementById("ticker-gems");
        this.tickerMessage = document.getElementById("ticker-update");
        this.players = ['images/players/char-boy.png',
            'images/players/char-cat-girl.png',
            'images/players/char-horn-girl.png',
            'images/players/char-pink-girl.png',
            'images/players/char-princess-girl.png',
        ];
    }

    // This class requires an update(), render() and
    // a handleInput() method.
    update() {
        if (this.dx > 505 - this.dWidth - this.sx) {
            this.dx = 505 - this.dWidth - this.sx;
        }
        else if (this.dx < 0) {
            this.dx = this.sx;
        }
        if (this.dy > 606 - this.dHeight - this.sy) {
            this.dy = 606 - this.dHeight - this.sy;
        }
        else if (this.dy < 0) {
            this.dy = 47.5;
            // scores(this.dy);
        }
    }
    render() {
        // console.log(this.sprite);
        ctx.drawImage(Resources.get(this.sprite), this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
    }
    handleInput(keyCode) {
        switch (keyCode) {
            case 'left':
                this.dx = this.dx - this.h;
                break;
            case 'up':
                this.dy = this.dy - this.v;
                break;
            case 'right':
                this.dx = this.dx + this.h;
                break;
            case 'down':
                this.dy = this.dy + this.v;
                break;
        }
    }
    //Ramdomly select an avatar from the player avatar array
    avatar() {
        this.sprite = this.players[Math.floor(Math.random() * this.players.length)];
    }

    // Game start and restart method
    start() {
        if (this.restart == true) {
            console.log(this.restart == true);
            this.score = 0;
            this.lives = 3;
            this.wins = 0;
            this.gems = 0;
            this.tickerScore.innerHTML = this.score;
            this.tickerLives.innerHTML = this.lives;
            this.tickerScore.innerHTML = this.score;
            this.tickerGems.innerHTML = this.gems;
            this.tickerWins.innerHTML = this.wins;
            this.tickerMessage.innerHTML = "GOOD LUCK! Each succesful crossing earns you 100 points and one extra life! Don't squash the bugs on the way that'll cost you a life!";
            this.restart = false;
        }

    }
    // Bug collision update method
    collide() {
        if (this.collision == true) {
            console.log(this.collision == true);
            this.lives--;
            this.score = this.score - 100;
            this.tickerScore.innerHTML = this.score;
            this.tickerLives.innerHTML = this.lives;
            this.tickerScore.innerHTML = this.score;
            this.tickerGems.innerHTML = this.gems;
            this.tickerWins.innerHTML = this.wins;
            this.tickerMessage.innerHTML = "OOPS, BE CAREFUL! Don't squash the bugs!";
            this.collision = false;
            if (this.lives == 0) {
                this.tickerMessage.innerHTML = "GAME OVER! Each bug you squash is a life and you only have three! Click START GAME to plan again!";
                this.score = 0;
                this.lives = 0;
                this.wins = 0;
                this.gems = 0;
                this.tickerScore.innerHTML = this.score;
                this.tickerLives.innerHTML = this.lives;
                this.tickerScore.innerHTML = this.score;
                this.tickerGems.innerHTML = this.gems;
                this.tickerWins.innerHTML = this.wins;
                this.dx = 505;
                this.dy = 606;
            }
        }

    }
    // Feature collection method
    collect() {
        if (this.collection == true) {
            console.log(features.imgFeatures[0]);
            switch (features.feature) {

                case features.imgFeatures[0]:
                    this.score = 200 + this.score;
                    this.gems++;
                    this.tickerScore.innerHTML = this.score;
                    this.tickerGems.innerHTML = this.gems;
                    this.tickerMessage.innerHTML = `Nice! The Blue Gem earned you 200 points!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[1]:
                    this.score = 500 + this.score;
                    this.gems++;
                    this.tickerScore.innerHTML = this.score;
                    this.tickerGems.innerHTML = this.gems;
                    this.tickerMessage.innerHTML = `Awesome! The Green Gem earned you 500 points!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[2]:
                    this.score = 100 + this.score;
                    this.gems++;
                    this.tickerScore.innerHTML = this.score;
                    this.tickerGems.innerHTML = this.gems;
                    this.tickerMessage.innerHTML = `Way-to-go! The Orange Gem earned you 100 points!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[3]:
                    this.lives++;
                    this.tickerLives.innerHTML = this.lives;
                    this.tickerMessage.innerHTML = `You won my heart! The Heart earned you another life!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[4]:
                    this.lives++;
                    this.lives++;
                    this.tickerLives.innerHTML = this.lives;
                    this.tickerMessage.innerHTML = `The key to succuss! That Golden Key earned you 2 lives!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[5]:
                    this.lives++;
                    this.tickerLives.innerHTML = this.lives;
                    this.tickerMessage.innerHTML = `You are a STAR! That star just earned you another life!`;
                    this.collection = false;
                    break;
                case features.imgFeatures[6]:
                    this.score = -300 + this.score;
                    this.lives--;
                    this.tickerLives.innerHTML = this.lives;
                    this.tickerScore.innerHTML = this.score;
                    this.tickerMessage.innerHTML = `Whoops, watch out! The Rock just took away 1 life and 300 points!`;
                    this.collection = false;
                    break;
                default:
            }
        }
    }
    // Successful crossing method
    success() {
        if (this.dy == 47.50) {
            console.log(this.dy == 47.50);
            this.won = true;
            this.score += 100;
            this.wins += 1;
            this.lives += 1;
            this.dx = 505;
            this.dy = 606;
            this.tickerScore.innerHTML = this.score;
            this.tickerLives.innerHTML = this.lives;
            this.tickerWins.innerHTML = this.wins;
            // this.tickerMessage.innerHTML = `WELL DONE! You had it... that's worth 1 extra life and 100 points!`;
            this.avatar();
            features.select();
        }
    }
}

// A class for the game features
class Features {
    constructor(dx, dy, feature) {
        this.sprite = 'images/features/Gem-Blue.png';
        this.sx = 0;
        this.sy = 52;
        this.sWidth = 101;
        this.sHeight = 119;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = 101;
        this.dHeight = 119;
        this.feature = feature;
        this.imgFeatures = [
            'images/features/Gem-Blue.png',
            'images/features/Gem-Green.png',
            'images/features/Gem-Orange.png',
            'images/features/Heart.png',
            'images/features/Key.png',
            'images/features/Star.png',
            'images/features/Rock.png',
        ];
    }
    // Method to randomly select and place a feature
    select() {
        this.sprite = this.imgFeatures[Math.floor(Math.random() * this.imgFeatures.length)];
        this.feature = this.sprite;
        this.dx = Math.floor(((Math.random() * 5) * 100));
        this.dy = Math.floor((Math.random() * 3) * 75 + 75);
        this.render(this.sprite, this.dx, this.dy);
    }

    // Method to provide game feature only after first succussful crossing
    update() {
        if (Player.won == true) {
            this.render();
        }

    }
    // Render feature based on it's dimensions and the select method
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Now instantiate your objects.
var enemyTop = new Enemy(0, 150);
var enemyCenter = new Enemy(0, 225);
var enemyBottom = new Enemy(0, 300);
// Place all enemy objects in an array called allEnemies
const allEnemies = [enemyTop, enemyCenter, enemyBottom];

// Place the player object in a variable called player
const player = new Player(505, 606);
// document.getElementById('selectAvatar').addEventListener('click', player.avatar(event));
// document.getElementById("startGame").addEventListener('click', startGame(event));
// Place the Features object in variable for features
const features = new Features();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});

// Game start and restart function.  As a note, I didn't manage to select the specific button element so would like to know what I'm missing here, thanks!
document.addEventListener('click', function (e) {
    if (e.type == 'click') {
        player.dx = 505;
        player.dy = 606;
        player.restart = true;
        player.start(player.restart);
    }
});

// Player avator select function.  As a note, I didn't manage to select the specific button element so would like to know what I'm missing here, thanks!
document.addEventListener('click', function (e) {
    if (e.type == 'click') {
        document.getElementById("ticker-update").innerHTML = "Click the SELECT PLAYER button to switch the avatar";
        player.players.forEach(function () {
            player.avatar();
            player.dy = 606;
            player.restart = true;
            player.start(player.restart);
        });
    }
});


//Collision detection of player with enemies function
function checkCollisions() {
    allEnemies.forEach(function (enemy) {
        if (player.dx + player.dWidth > enemy.dx &&
            player.dx < enemy.dx + enemy.dWidth &&
            player.dy + enemy.dHeight > enemy.dy &&
            player.dy < enemy.dy + enemy.dHeight) {
            player.dx = 505;
            player.dy = 606;
            player.collision = true;
            player.collide(player.collision);
        }

    });

}
//Collision with features, i.e. feature collection function
function collectFeatures() {
    if (player.dx + player.dWidth > features.dx &&
        player.dx < features.dx + features.dWidth &&
        player.dy + features.dHeight > features.dy &&
        player.dy < features.dy + features.dHeight) {
        features.dx = 700;
        features.dy = 700;
        player.collection = true;
        console.log(player.collection, features.feature);
        player.collect(player.collection, features.feature);
    }
}


