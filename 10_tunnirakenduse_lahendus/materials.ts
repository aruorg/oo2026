class Material{
    mass: number;
    specificHeatC: number;
    temperature: number;

    constructor(mass:number, specificHeatC: number, temperature: number){
        this.mass = mass;
        this.specificHeatC = specificHeatC;
        this.temperature = temperature;
    }

    CurrentTemperature(){
        return this.temperature;
        
    }

    EnergyChange(joules:number): number{
        let tempChange = joules/(this.mass * this.specificHeatC);
        this.temperature += tempChange;
        return this.temperature;
    }

    getJoulesPerKelvin():number{
         return this.mass * this.specificHeatC;
    }
}



let waterPot: Material = new Material(3, 4200, 20)
console.log(waterPot.CurrentTemperature());
waterPot.EnergyChange(10000);
console.log(waterPot.CurrentTemperature());
let ironRadiator: Material = new Material(10, 412, 20);
console.log(ironRadiator.CurrentTemperature());
ironRadiator.EnergyChange(10000);
console.log(ironRadiator.CurrentTemperature());

if(ironRadiator.CurrentTemperature() > waterPot.CurrentTemperature()){
    let changeEnergy:number = 1000;
    ironRadiator.EnergyChange(-changeEnergy);
    waterPot.EnergyChange(changeEnergy);
}

console.log(waterPot.CurrentTemperature(), ironRadiator.CurrentTemperature())

class AirAmount extends Material{

        constructor(roomLenght:number, roomWidth:number, roomHeight:number, temperature:number){
        super(roomLenght*roomWidth*roomHeight*1.23, 1012, temperature);
        }
    }

function EqualTemp(m: Array<Material>): number{
    //how much energy is needed to increase all things by 1C
    let joulesKelvinSum = 0;
    //total heat
    let joulesSum = 0;

    //going through each object one by one
    for(let i = 0; i<m.length; i++){
        joulesKelvinSum =+ m[i].getJoulesPerKelvin();
        joulesSum =+ m[i].getJoulesPerKelvin()*m[i].CurrentTemperature();
    }

    return joulesSum/joulesKelvinSum;
}

let waterPot1 = new Material(3, 4200, 21);
let ironRadiator1 = new Material(10, 412, 55);
let airInRoom = new AirAmount(3, 2, 2.5, 20)
console.log("equal temperature for objects is:", EqualTemp ([waterPot1, ironRadiator1, airInRoom]));