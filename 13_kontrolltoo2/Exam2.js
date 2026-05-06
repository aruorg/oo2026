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
var Car = /** @class */ (function () {
    function Car(length, mass, brand) {
        this.length = length;
        this.mass = mass;
        this.brand = brand;
    }
    Car.prototype.getLength = function () { return this.length; };
    Car.prototype.getMass = function () { return this.mass; };
    Car.prototype.getBrand = function () { return this.brand; };
    return Car;
}());
var MovingCar = /** @class */ (function (_super) {
    __extends(MovingCar, _super);
    function MovingCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xCoord = 0;
        _this.distance = 0;
        return _this;
    }
    MovingCar.prototype.Forward = function (xCoord) {
        if (this.xCoord < xCoord)
            this.distance = +this.xCoord;
        return this.distance;
    };
    MovingCar.prototype.Backward = function (xCoord) {
        if (this.xCoord > xCoord)
            this.distance = -this.xCoord;
        return this.distance;
    };
    return MovingCar;
}(Car));
var Truck = /** @class */ (function () {
    function Truck(drivingTime, startXcoord, endXcoord) {
        this.drivingTime = drivingTime;
        this.startXcoord = startXcoord;
        this.endXcoord = endXcoord;
    }
    Truck.prototype.calcDrivingDistance = function () {
        var distance = this.startXcoord + this.endXcoord;
        return distance;
    };
    Truck.prototype.getDrivingTime = function () {
        return this.drivingTime;
    };
    return Truck;
}());
var PassengerCar = /** @class */ (function () {
    function PassengerCar(mass) {
        this.mass = mass;
    }
    PassengerCar.prototype.weightControl = function () {
        var result = "";
        if (this.mass > 3500)
            result = "above limit";
        else
            result = "below limit";
        return result;
    };
    return PassengerCar;
}());
var c1 = new Car(8, 3000, "Mercedez");
var c2 = new Car(9, 5000, "Mercedez");
var c3 = new Car(7, 2000, "Toyota");
var p = new PassengerCar(5000);
console.log(p.weightControl());
