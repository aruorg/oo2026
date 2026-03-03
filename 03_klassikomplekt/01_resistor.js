var Resistor = /** @class */ (function () {
    function Resistor(r, g) {
        this.r = r;
        this.g = g;
        this.draw();
    }
    Resistor.prototype.draw = function () {
        //drawing a rectangle
        this.g.beginPath();
        //50- x position(distance from left of the canvas)
        //10- y(distance from top to rectangle)
        //100- width of rectngle
        //30- height of rectangle
        this.g.rect(50, 10, 100, 30);
        this.g.stroke();
        //filltext(text,x,y)
        this.g.fillText("" + this.r, 80, 28);
    };
    return Resistor;
}());
