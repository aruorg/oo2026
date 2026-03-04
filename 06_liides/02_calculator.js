var CmToIn = /** @class */ (function () {
    function CmToIn() {
    }
    CmToIn.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToIn.prototype.inputUnit = function () {
        return "cm";
    };
    CmToIn.prototype.outputUnit = function () {
        return "in";
    };
    return CmToIn;
}());
