class BankAccount {
    protected balance: number = 0;
    protected error: string = "";

    pressButton(b: string): void {
        this.error = ""; //clears previous error
        if (b === ""){
            this.balance = 0;
        }
        //depositing 10
        else if (b === "+"){
            this.balance += 10;
        }
        //withdrawing 10
        else if (b === "-"){
            //checks if there is enough money to withdraw
            if (this.balance <= 0) {
                this.error = "There is not enough money to withdraw this amount"
            } else {
            this.balance -= 10;
            }
        }
    }
    
    getBalance():string {
        return this.balance.toString();
    }

    getError(): string {
        return this.error;
    }
}

export{
    BankAccount
}