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
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
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
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Default state is switch OFF
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        if (this.on) {
            return 0;
        }
        else {
            return 100000000;
        }
    };
    //For two value if statements
    //getResistance(): number{
    //    return(this.on ? 0:10000000);
    //}
    Switch.prototype.getCurrent = function (u) {
        if (u > 0) {
            if (this.on) {
                throw new Error("Short curcuit");
            }
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var s1 = new Switch();
console.log("The initaial value of the resistor 1 when it is off is " + s1.getResistance());
s1.setOn(true);
console.log("The initaial value of the resistor 1 when it is on is " + s1.getResistance());
console.log(s1.getCurrent(-10));
s1.setOn(false);
console.log(s1.getCurrent(-10));
