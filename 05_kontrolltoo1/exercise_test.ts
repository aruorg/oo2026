class Battery {
    maxCapacity: number;//mAh
    currentCharge: number;//mAh
    readonly chargerPower: number = 50;//W

    constructor(maxCapacity: number, currentCharge: number) {
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
        
    }

    getBatteryPercentage():number {
        let batteryPercent = (this.currentCharge / this.maxCapacity) * 100;
        return batteryPercent;
    }

    secondsCharged():number{
        let time = (3.6 * this.maxCapacity) / this.chargerPower;
        return time;
    }
     
}

let b1 = new Battery(2400, 600);
console.log(b1.getBatteryPercentage());
console.log(b1.secondsCharged());