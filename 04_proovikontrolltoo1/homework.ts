class PolygonRect {
    x: number[] = [];
    y: number[] = [];

    constructor(canvas: HTMLCanvasElement, padding: number = 20) {
        // Arvuta ristküliku nurgad canvas mõõtmete ja paddinguga
        this.x.push(padding);
        this.y.push(padding);

        this.x.push(canvas.width - padding);
        this.y.push(padding);

        this.x.push(canvas.width - padding);
        this.y.push(canvas.height - padding);;

        this.x.push(padding);
        this.y.push(canvas.height - padding);
    }
    
    draw(ctx: CanvasRenderingContext2D) {
        if (this.x.length === 0) return;

        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for(let i = 1; i < this.x.length; i++) {
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}


class Ball{

    x: number;
    y: number;

    vx: number;
    vy: number;

    radius: number;

    constructor(x:number, y:number, vx:number = 3, vy:number = 2, radius: number = 20) {
        this.x=x;
        this.y=y;

        this.vx=3;
        this.vy=2;

        this.radius=20;
    }

     draw(ctx:CanvasRenderingContext2D) {

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

    }

    update(canvas: HTMLCanvasElement) {
        this.x += this.vx;
        this.y += this.vy;

        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx *= -1;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.vy *= -1;
        }
    }

}

function start() {
    const canvas = document.getElementById("board1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const ball = new Ball(canvas.width / 2, canvas.height / 2);
    const smallRect = new PolygonRect(canvas, 30);

    function loop(){
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