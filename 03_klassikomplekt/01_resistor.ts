class Resistor{
    protected r:number;
    protected g;

    constructor(r:number, g:CanvasRenderingContext2D){
        this.r=r;
        this.g=g;
        this.draw();
    }

    draw(){
        //drawing a rectangle
        this.g.beginPath()
        //50- x position(distance from left of the canvas)
        //10- y(distance from top to rectangle)
        //100- width of rectngle
        //30- height of rectangle
        this.g.rect(50, 10, 100, 30);
        this.g.stroke();
        //filltext(text,x,y)
        this.g.fillText("" +this.r,80,28,
            
        );
    }

}