"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 0;
        this.error = "";
    }
    BankAccount.prototype.pressButton = function (b) {
        this.error = ""; //clears previous error
        if (b === "") {
            this.balance = 0;
        }
        //depositing 10
        else if (b === "+") {
            this.balance += 10;
        }
        //withdrawing 10
        else if (b === "-") {
            //checks if there is enough money to withdraw
            if (this.balance <= 0) {
                this.error = "There is not enough money to withdraw this amount";
            }
            else {
                this.balance -= 10;
            }
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance.toString();
    };
    BankAccount.prototype.getError = function () {
        return this.error;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
