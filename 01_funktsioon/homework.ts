function cylinderSurfaceArea(r:number, h:number):number{
   const pii:number = 3.1415;
   let area:number = 2 * pii * Math.pow(r,2) + 2 * pii * r * h;
   let roundArea:number = Math.round(area * 100) / 100;
   return roundArea;
}

let r:number = 5;
let h:number = 10;

let area:number = cylinderSurfaceArea(r,h);

console.log("surface area of the cylinder with radius " + r + " and height " + h + " is " + area);