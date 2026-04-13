import { BankAccount } from "../homework";

let bankobj: BankAccount;

beforeEach(() => {
    bankobj = new BankAccount();
});

test("initial balance", () => {
    expect(bankobj.getBalance()).toBe("0");
});

test("one deposit", () => {
    bankobj.pressButton("+");
    expect(bankobj.getBalance()).toBe("10");
});

test("two deposits", () => {
    bankobj.pressButton("+");
    bankobj.pressButton("+");
    expect(bankobj.getBalance()).toBe("20");
});

test("withdraw", () => {
    bankobj.pressButton("+");
    bankobj.pressButton("-");
    expect(bankobj.getBalance()).toBe("0");
});

test("cannot withdraw if balance is zero", () => {
    bankobj.pressButton("-");
    expect(bankobj.getBalance()).toBe("0");
});
