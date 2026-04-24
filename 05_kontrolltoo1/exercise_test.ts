class Battery {
    maxCapacity: number;//mAh
    currentCharge: number;//mAh
    readonly chargerPower: number = 50;//W = joules

    constructor(maxCapacity: number, currentCharge: number) {
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
        
    }

    getBatteryPercentage():number {
        let batteryPercent = (this.currentCharge / this.maxCapacity) * 100;
        if(batteryPercent >= 100){
            throw new Error("Battery full!")
        }

        if(batteryPercent <= 0){
            throw new Error("Battery low!")
        }

        return batteryPercent;
    }

    getChargeTime(seconds:number):number{
        let time = this.maxCapacity / this.chargerPower;
        return time;
    }

    getChargeLevel():number {

    }

    
     
}

let b1 = new Battery(2400, 600);
let b2 = new Battery(2400, 0);

console.log(b1.getBatteryPercentage());
console.log(b1.getChargeTime());

console.log(b2.getBatteryPercentage());
console.log(b2.getChargeTime());