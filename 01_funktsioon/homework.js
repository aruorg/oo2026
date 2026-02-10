function cylinderSurfaceArea(r, h) {
    var pii = 3.1415;
    var area = 2 * pii * Math.pow(r, 2) + 2 * pii * r * h;
    var roundArea = Math.round(area * 100) / 100;
    return roundArea;
}
var r = 5;
var h = 10;
var area = cylinderSurfaceArea(r, h);
console.log("surface area of the cylinder with radius " + r + " and height " + h + " is " + area);
