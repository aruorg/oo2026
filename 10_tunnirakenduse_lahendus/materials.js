var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Material = /** @class */ (function () {
    function Material(mass, specificHeatC, temperature) {
        this.mass = mass;
        this.specificHeatC = specificHeatC;
        this.temperature = temperature;
    }
    Material.prototype.CurrentTemperature = function () {
        return this.temperature;
    };
    Material.prototype.EnergyChange = function (joules) {
        var tempChange = joules / (this.mass * this.specificHeatC);
        this.temperature += tempChange;
        return this.temperature;
    };
    Material.prototype.getJoulesPerKelvin = function () {
        return this.mass * this.specificHeatC;
    };
    return Material;
}());
var waterPot = new Material(3, 4200, 20);
console.log(waterPot.CurrentTemperature());
waterPot.EnergyChange(10000);
console.log(waterPot.CurrentTemperature());
var ironRadiator = new Material(10, 412, 20);
console.log(ironRadiator.CurrentTemperature());
ironRadiator.EnergyChange(10000);
console.log(ironRadiator.CurrentTemperature());
if (ironRadiator.CurrentTemperature() > waterPot.CurrentTemperature()) {
    var changeEnergy = 1000;
    ironRadiator.EnergyChange(-changeEnergy);
    waterPot.EnergyChange(changeEnergy);
}
console.log(waterPot.CurrentTemperature(), ironRadiator.CurrentTemperature());
var AirAmount = /** @class */ (function (_super) {
    __extends(AirAmount, _super);
    function AirAmount(roomLenght, roomWidth, roomHeight, temperature) {
        return _super.call(this, roomLenght * roomWidth * roomHeight * 1.23, 1012, temperature) || this;
    }
    return AirAmount;
}(Material));
function EqualTemp(m) {
    //how much energy is needed to increase all things by 1C
    var joulesKeölvinSum = 0;
    //total heat
    var joulesSum = 0;
    //going through each object one by one
    for (var i = 0; i < m.length; i++) {
        joulesKeölvinSum = +m[i].getJoulesPerKelvin();
        joulesSum = +m[i].getJoulesPerKelvin() * m[i].CurrentTemperature();
    }
    return joulesSum / joulesKeölvinSum;
}
var waterPot1 = new Material(3, 4200, 21);
var ironRadiator1 = new Material(10, 412, 55);
var airInRoom = new AirAmount(3, 2, 2.5, 20);
console.log("equal temperature for objects is:", EqualTemp([waterPot1, ironRadiator1, airInRoom]));
