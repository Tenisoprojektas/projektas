var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
    var num = Math.floor(Math.random()*(max-min)) + min;
    // if min = 10 max = 15 random var = 0.1544465; it will return approzimately 10 because of math.floor
    return num;
}
var h1 = document.querySelector('h1');


function Ball() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.velX = random(-7, 7);
    this.velY = random(-7, 7);
    this.color = 'green';
    this.size = random(10, 20);
}
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}
var balls = [];
Ball.prototype.collisionDetect = function() {
    for (j = 0; j < balls.length; j++) {
        if ( (!(this.x === balls[j].x && this.y === balls[j].y && this.velX === balls[j].velX && this.velY === balls[j].velY)) ) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'green)';
            }
        }
    }
}
function loop() {

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball();
        balls.push(ball);
    }

    for (i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }

    requestAnimationFrame(loop);
}
loop();


