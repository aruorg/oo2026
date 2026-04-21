class Kettle {
    waterAmount: number;
    temperature: number;
    heatingPower: number = 0; //watts
    readonly specificHeatCapacity: number = 4200;
    
    constructor(waterAmount: number, temperature: number){
        this.waterAmount = waterAmount;
        this.temperature = temperature;

    }

    setHeatingPower(newPower: number): void{
        //power=joules per sec
        this.heatingPower = newPower;
    }

    getTemperature():number{
        return this.temperature;
    }

    heatAsecond(): void{
        let joules = this.heatingPower;
        let deltaTemperature = joules/(this.specificHeatCapacity*(this.waterAmount/1000));
        this.temperature += deltaTemperature;
    }

    calculateHeatingTime(targetTemperature: number): number{
        let temperatureDifference = targetTemperature-this.temperature;
        let joulesRequired = temperatureDifference * this.specificHeatCapacity * (this.waterAmount/1000);
        let timeinSeconds = joulesRequired/this.heatingPower;
        return timeinSeconds;
    }
}

let w = new Kettle(800, 20);
console.log(w.getTemperature());
w.setHeatingPower(1500);
console.log("after setting the heating power: " + w.getTemperature());
w.heatAsecond();
console.log("After heating for 1 s: " + w.getTemperature());
let heatingtime = w.calculateHeatingTime(80);
console.log(heatingtime);
