class Resistor2{
    protected width:number;
    protected height:number=30;

    constructor(
        protected r:number,
        protected g:CanvasRenderingContext2D,
        //x posit. where the resisitor is beginning
        protected startx:number,
        protected endx:number,
        protected y:number
){
    this.width=this.endx=this.y;
    this.draw();
    }
        

    draw(){
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx+this.width/4, this.y);
        this.g.stroke();

        // Drawing the rectangle

        const bodyX=this.startx+this.width/4;
        const bodyY=this.y-this.height/2;
        const bodyW=this.width/2;
        const bodyH=this.height;
        this.g.beginPath()
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(this.startx+this.width*3/4,this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();

        this.g.fillText(this.r+"Ω", bodyX+8, this.y+5);
        }
}