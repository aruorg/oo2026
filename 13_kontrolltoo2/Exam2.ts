class Car{
    length: number;
    mass: number;
    brand: string;

    constructor(length:number, mass:number, brand:string){
        this.length = length;
        this.mass = mass;
        this.brand = brand;
    }

    getLength(): number{return this.length;}
    getMass(): number{return this.mass;}
    getBrand(): string{return this.brand;}

}

interface Movable{
    Forward(xCoordP:number):number;
    Backward(xCoordN:number):number;
}

class MovingCar extends Car implements Movable{
    xCoord:number = 0;
    distance:number = 0
    
    Forward(xCoord: number): number {
        if (this.xCoord < xCoord)
            this.distance =+ this.xCoord;
        return this.distance;
    }

    Backward(xCoord: number): number {
        if (this.xCoord > xCoord)
            this.distance =- this.xCoord;
        return this.distance;
    }
}

class Truck{
    drivingTime: number;
    startXcoord: number;
    endXcoord: number;


    constructor(drivingTime:number, startXcoord:number, endXcoord:number){
        this.drivingTime = drivingTime;
        this.startXcoord = startXcoord;
        this.endXcoord = endXcoord;
    }

    calcDrivingDistance():number{
        let distance = this.startXcoord + this.endXcoord;
        return distance;
    }
    getDrivingTime(): number{
        return this.drivingTime;
    }

}

class PassengerCar{
    mass:number;

    constructor(mass:number){
        this.mass = mass
    }

    weightControl():string{
        let result = ""
        if (this.mass > 3500) 
            result = "above limit"
        else
            result = "below limit"
        return result;
    }

}

const c1 = new Car(8, 3000, "Mercedez");
const c2 = new Car(9, 5000, "Mercedez");
const c3 = new Car(7, 2000, "Toyota");
const p = new PassengerCar(5000);
console.log(p.weightControl());