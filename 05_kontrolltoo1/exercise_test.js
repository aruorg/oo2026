var Battery = /** @class */ (function () {
    function Battery(maxCapacity, currentCharge) {
        this.chargerPower = 50; //W = joules
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
    }
    Battery.prototype.getBatteryPercentage = function () {
        var batteryPercent = (this.currentCharge / this.maxCapacity) * 100;
        if (batteryPercent >= 100) {
            throw new Error("Battery full!");
        }
        if (batteryPercent <= 0) {
            throw new Error("Battery low!");
        }
        return batteryPercent;
    };
    Battery.prototype.getChargeTime = function () {
        var chargeTime = this.maxCapacity / this.chargerPower;
        return chargeTime;
    };
    return Battery;
}());
var b1 = new Battery(2400, 600);
var b2 = new Battery(2400, 0);
console.log(b1.getBatteryPercentage());
console.log(b1.getChargeTime());
console.log(b2.getBatteryPercentage());
console.log(b2.getChargeTime());
