var Kettle = /** @class */ (function () {
    function Kettle(waterAmount, temperature) {
        this.heatingPower = 0; //watts
        this.specificHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Kettle.prototype.setHeatingPower = function (newPower) {
        //power=joules per sec
        this.heatingPower = newPower;
    };
    Kettle.prototype.getTemperature = function () {
        return this.temperature;
    };
    Kettle.prototype.heatAsecond = function () {
        var joules = this.heatingPower;
        var deltaTemperature = joules / (this.specificHeatCapacity * (this.waterAmount / 1000));
        this.temperature += deltaTemperature;
    };
    Kettle.prototype.calculateHeatingTime = function (targetTemperature) {
        var temperatureDifference = targetTemperature - this.temperature;
        var joulesRequired = temperatureDifference * this.specificHeatCapacity * (this.waterAmount / 1000);
        var timeinSeconds = joulesRequired / this.heatingPower;
        return timeinSeconds;
    };
    return Kettle;
}());
var w = new Kettle(800, 20);
console.log(w.getTemperature());
w.setHeatingPower(1500);
console.log("after setting the heating power: " + w.getTemperature());
w.heatAsecond();
console.log("After heating for 1 s: " + w.getTemperature());
var heatingtime = w.calculateHeatingTime(80);
console.log(heatingtime);
