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
    let joulesKeölvinSum = 0;
    //total heat
    let joulesSum = 0;

    //going through each object one by one
    for(let i = 0; i<m.length; i++){
        joulesKeölvinSum =+ m[i].getJoulesPerKelvin();
        joulesSum =+ m[i].getJoulesPerKelvin()*m[i].CurrentTemperature();
    }

    return joulesSum/joulesKeölvinSum;
}