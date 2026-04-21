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
    AbstractEmployee.prototype.work = function (hours) {
        return hours * this.getSalary();
    };
    AbstractEmployee.prototype.introduce = function () {
        console.log("Employee: " + this.name);
    };
    return AbstractEmployee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, baseSalary) {
        var _this = _super.call(this, name) || this;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Developer.prototype.getSalary = function () {
        return this.baseSalary;
    };
    return Developer;
}(AbstractEmployee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, baseSalary) {
        var _this = _super.call(this, name) || this;
        _this.bonusActive = false;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Manager.prototype.setBonus = function (state) {
        this.bonusActive = state;
    };
    Manager.prototype.getSalary = function () {
        return this.bonusActive ? this.baseSalary + 1000 : this.baseSalary;
    };
    Manager.prototype.work = function (hours) {
        if (this.bonusActive && hours > 10) {
            throw new Error("Overtime not allowed with active bonus mode");
        }
        return _super.prototype.work.call(this, hours);
    };
    return Manager;
}(AbstractEmployee));
var EmployeeGroup = /** @class */ (function (_super) {
    __extends(EmployeeGroup, _super);
    function EmployeeGroup(name) {
        var _this = _super.call(this, name) || this;
        _this.employees = [];
        return _this;
    }
    EmployeeGroup.prototype.addEmployee = function (e) {
        this.employees.push(e);
    };
    return EmployeeGroup;
}(AbstractEmployee));
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Department.prototype.getSalary = function () {
        var total = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var e = _a[_i];
            total += e.getSalary();
        }
        return total;
    };
    return Department;
}(EmployeeGroup));
var FreelancePool = /** @class */ (function (_super) {
    __extends(FreelancePool, _super);
    function FreelancePool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FreelancePool.prototype.getSalary = function () {
        var sum = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var e = _a[_i];
            sum += e.getSalary();
        }
        return this.employees.length === 0 ? 0 : sum / this.employees.length;
    };
    return FreelancePool;
}(EmployeeGroup));
var dev1 = new Developer("Alice", 2000);
console.log(dev1.getSalary());
var mgr1 = new Manager("Bob", 3000);
console.log(mgr1.getSalary());
mgr1.setBonus(true);
console.log("Manager with bonus:", mgr1.getSalary());
try {
    console.log(mgr1.work(12));
}
catch (e) {
    console.log("Error:", e.message);
}
var dept = new Department("IT Dept");
dept.addEmployee(dev1);
dept.addEmployee(mgr1);
console.log("Department total salary:", dept.getSalary());
var pool = new FreelancePool("Contractors");
pool.addEmployee(new Developer("Charlie", 1500));
pool.addEmployee(new Developer("Dave", 1800));
console.log("Freelance average salary:", pool.getSalary());
