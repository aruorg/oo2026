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
//Abstract class or Parent class
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return (u / this.getResistance());
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var resistor1 = new Resistor(20);
console.log("The resistance value of resistor 1: " + resistor1.getResistance());
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //default state is SWITCH is off
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    /*getResistance(): number {
        if(this.on){
            return 0;
        } else {
            return 1000000000;
        }
    }*/
    Switch.prototype.getResistance = function () {
        return (this.on ? 0 : 1000000000);
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0) {
            if (this.on) {
                throw new Error("Short circuit");
            }
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
//Function that takes an AbstractResistor and prints its resistance
function printResistance(r) {
    console.log(resistor1.getResistance());
}
var resistor2 = new Switch();
console.log("The initial resistance value when it is off: " + resistor2.getResistance());
resistor2.setOn(true);
console.log("The resistance value when the switch is on: " + resistor2.getResistance());
try {
    console.log(resistor2.getCurrent(5));
}
catch (e) {
    console.log("Caught error:", e.message);
}
//console.log(resistor2.getCurrent(5));
//resistor2.setOn(false);
resistor2.setOn(false);
console.log(resistor2.getCurrent(5));
printResistance(resistor2);
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var SeriesConection = /** @class */ (function (_super) {
    __extends(SeriesConection, _super);
    function SeriesConection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConection.prototype.getResistance = function () {
        var totalResistance = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            totalResistance += resistor.getResistance();
        }
        ;
        return totalResistance;
    };
    return SeriesConection;
}(MultipleConnection));
var ParallelConection = /** @class */ (function (_super) {
    __extends(ParallelConection, _super);
    function ParallelConection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            inverseSum += (1 / resistor.getResistance());
        }
        ;
        return 1 / inverseSum;
    };
    return ParallelConection;
}(MultipleConnection));
var r3 = new SeriesConection();
r3.addResistor(new Resistor(220));
r3.addResistor(new Resistor(220));
console.log("Resistance of series connection " + r3.getResistance() + " ohms");
var r4 = new ParallelConection();
r4.addResistor(new Resistor(220));
r4.addResistor(new Resistor(220));
console.log("Resistance of parallel connection " + r4.getResistance() + " ohms");
