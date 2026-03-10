var EurToUsd = /** @class */ (function () {
    function EurToUsd() {
    }
    EurToUsd.prototype.calculate = function (eur) {
        if (eur < 0)
            throw new Error("negatiivset arvu ei saa sisestada");
        return eur * 1.1643;
    };
    EurToUsd.prototype.inputUnit = function () {
        return "EUR";
    };
    EurToUsd.prototype.outputUnit = function () {
        return "USD";
    };
    return EurToUsd;
}());
var UsdToEur = /** @class */ (function () {
    function UsdToEur() {
    }
    UsdToEur.prototype.calculate = function (dollars) {
        if (dollars < 0)
            throw new Error("negatiivset arvu ei saa sisestada");
        return dollars * 0.8609;
    };
    UsdToEur.prototype.inputUnit = function () {
        return "USD";
    };
    UsdToEur.prototype.outputUnit = function () {
        return "EUR";
    };
    return UsdToEur;
}());
var EurToGbp = /** @class */ (function () {
    function EurToGbp() {
    }
    EurToGbp.prototype.calculate = function (eur) {
        if (eur < 0)
            throw new Error("negatiivset arvu ei saa sisestada");
        return eur * 0.8655;
    };
    EurToGbp.prototype.inputUnit = function () {
        return "EUR";
    };
    EurToGbp.prototype.outputUnit = function () {
        return "GBP";
    };
    return EurToGbp;
}());
var GbpToEur = /** @class */ (function () {
    function GbpToEur() {
    }
    GbpToEur.prototype.calculate = function (pounds) {
        if (pounds < 0)
            throw new Error("negatiivset arvu ei saa sisestada");
        return pounds * 1.1555;
    };
    GbpToEur.prototype.inputUnit = function () {
        return "GBP";
    };
    GbpToEur.prototype.outputUnit = function () {
        return "EUR";
    };
    return GbpToEur;
}());
