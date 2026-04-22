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
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee(name) {
        this.name = name;
    }
    return AbstractEmployee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        return _this;
    }
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    return Developer;
}(AbstractEmployee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        _this.bonus = false;
        return _this;
    }
    Manager.prototype.setBonus = function (active) {
        this.bonus = active;
    };
    Manager.prototype.getSalary = function () {
        //chacking if bonus is active and adding a bonus or just giving salary
        return this.bonus ? this.salary + 1000 : this.salary;
    };
    return Manager;
}(AbstractEmployee));
var Department = /** @class */ (function () {
    function Department() {
        this.employees = [];
    }
    Department.prototype.add = function (e) {
        this.employees.push(e);
    };
    Department.prototype.getTotalSalary = function () {
        var total = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var e = _a[_i];
            total += e.getSalary();
        }
        return total;
    };
    return Department;
}());
var Contractor = /** @class */ (function () {
    function Contractor(name, hours) {
        this.name = name;
        this.hours = hours;
    }
    Contractor.prototype.getSalary = function () {
        var hourlyRate = 20;
        return this.hours * hourlyRate;
    };
    return Contractor;
}());
var FreelancePool = /** @class */ (function () {
    function FreelancePool() {
        this.contractors = [];
    }
    FreelancePool.prototype.add = function (c) {
        this.contractors.push(c);
    };
    FreelancePool.prototype.getTotalSalary = function () {
        var total = 0;
        for (var _i = 0, _a = this.contractors; _i < _a.length; _i++) {
            var c = _a[_i];
            total += c.getSalary();
        }
        return total;
    };
    FreelancePool.prototype.showSalaries = function () {
        for (var _i = 0, _a = this.contractors; _i < _a.length; _i++) {
            var c = _a[_i];
            console.log(c.name + " salary:", c.getSalary());
        }
    };
    return FreelancePool;
}());
var dev = new Developer("Alice", 2000);
var mgr = new Manager("Bob", 3000);
mgr.setBonus(true);
console.log(dev.name + " salary:", dev.getSalary());
console.log(mgr.name + " salary:", mgr.getSalary());
var dept = new Department();
dept.add(dev);
dept.add(mgr);
console.log("Department salary:", dept.getTotalSalary());
var pool = new FreelancePool();
pool.add(new Contractor("Charlie", 165)); // 50 hours in week
pool.add(new Contractor("Dave", 160)); // 60 hours in week
pool.showSalaries();
console.log("Total freelance salary:", pool.getTotalSalary());
