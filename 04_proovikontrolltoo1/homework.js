var PolygonRect = /** @class */ (function () {
    function PolygonRect(canvas, padding) {
        if (padding === void 0) { padding = 20; }
        this.x = [];
        this.y = [];
        // Arvuta ristküliku nurgad canvas mõõtmete ja paddinguga
        this.x.push(padding);
        this.y.push(padding);
        this.x.push(canvas.width - padding);
        this.y.push(padding);
        this.x.push(canvas.width - padding);
        this.y.push(canvas.height - padding);
        ;
        this.x.push(padding);
        this.y.push(canvas.height - padding);
    }
    PolygonRect.prototype.draw = function (ctx) {
        if (this.x.length === 0)
            return;
        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 4;
        ctx.stroke();
    };
    return PolygonRect;
}());
var Ball = /** @class */ (function () {
    function Ball(x, y, vx, vy, radius) {
        if (vx === void 0) { vx = 3; }
        if (vy === void 0) { vy = 2; }
        if (radius === void 0) { radius = 20; }
        this.x = x;
        this.y = y;
        this.vx = 3;
        this.vy = 2;
        this.radius = 20;
    }
    Ball.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    };
    Ball.prototype.update = function (canvas) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.vy *= -1;
        }
    };
    return Ball;
}());
function start() {
    var canvas = document.getElementById("board1");
    var ctx = canvas.getContext("2d");
    var ball = new Ball(canvas.width / 2, canvas.height / 2);
    var smallRect = new PolygonRect(canvas, 30);
    function loop() {
        // taust
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //äärepiir
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        //ristkülik
        smallRect.draw(ctx);
        // Pall ja animatsioon
        ball.update(canvas);
        ball.draw(ctx);
        requestAnimationFrame(loop);
    }
    // alusta animatsioon
    loop();
}
