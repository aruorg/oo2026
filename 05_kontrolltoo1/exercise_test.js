var Battery = /** @class */ (function () {
    function Battery(maxCapacity, currentCharge) {
        this.chargerPower = 50; //W
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
    }
    Battery.prototype.getBatteryPercentage = function () {
        var batteryPercent = (this.currentCharge / this.maxCapacity) * 100;
        return batteryPercent;
    };
    Battery.prototype.secondsCharged = function () {
        var time = (3.6 * this.maxCapacity) / this.chargerPower;
        return time;
    };
    return Battery;
}());
var b1 = new Battery(2400, 600);
console.log(b1.getBatteryPercentage());
console.log(b1.secondsCharged());
