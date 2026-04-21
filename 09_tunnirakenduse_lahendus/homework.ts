class Battery {
    capacity: number;//watt-hours(Wh)
    charge: number;//current chrge in Wh
    chargingPower: number = 0;// watts
    readonly efficiency: number = 0.9;//90% efficiancy

    constructor(capacity: number, initialCharge: number) {
        this.capacity = capacity;
        this.charge = initialCharge;
    }

    setChargingPower(power: number): void {
        this.chargingPower = power;
    }

    getCharge(): number {
        return this.charge;
    }
    
    chargeOneMinute(): void {
        // current power (W) to Wh over one minute
        let energyAdded = (this.chargingPower * this.efficiency)/ 60;
        this.charge += energyAdded;

        if (this.charge > this.capacity){
            this.charge = this.capacity;
        }
    }


    calculateChargingTime(targetCharge: number): number {
        let energyNeeded = targetCharge - this.charge;
        if (energyNeeded <= 0) return 0;
        
        let effectivePower = this.chargingPower * this.efficiency;
        let timeInHours = energyNeeded / effectivePower;

        return timeInHours * 60; // returning minutes
    }
}

//usage

let b1 = new Battery(50, 10);

b1.setChargingPower(20);

b1.chargeOneMinute();
console.log("After 1 minute :", b1.getCharge());

let time = b1.calculateChargingTime(40);
console.log("Time to reach 40Wh:", time, "minutes");