var Battery = /** @class */ (function () {
    function Battery(capacity, initialCharge) {
        this.chargingPower = 0; // watts
        this.efficiency = 0.9; //90% efficiancy
        this.capacity = capacity;
        this.charge = initialCharge;
    }
    Battery.prototype.setChargingPower = function (power) {
        this.chargingPower = power;
    };
    Battery.prototype.getCharge = function () {
        return this.charge;
    };
    Battery.prototype.chargeOneMinute = function () {
        // current power (W) to Wh over one minute
        var energyAdded = (this.chargingPower * this.efficiency) / 60;
        this.charge += energyAdded;
        if (this.charge > this.capacity) {
            this.charge = this.capacity;
        }
    };
    Battery.prototype.calculateChargingTime = function (targetCharge) {
        var energyNeeded = targetCharge - this.charge;
        if (energyNeeded <= 0)
            return 0;
        var effectivePower = this.chargingPower * this.efficiency;
        var timeInHours = energyNeeded / effectivePower;
        return timeInHours * 60; // returning minutes
    };
    return Battery;
}());
//usage
var b1 = new Battery(50, 10);
b1.setChargingPower(20);
b1.chargeOneMinute();
console.log("After 1 minute :", b1.getCharge());
var time = b1.calculateChargingTime(40);
console.log("Time to reach 40Wh:", time, "minutes");
