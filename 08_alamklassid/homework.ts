abstract class AbstractEmployee {
    constructor(public name: string) {}

    abstract getSalary(): number;
}

class Developer extends AbstractEmployee {
    constructor(name: string, private salary: number) {
        super(name);
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends AbstractEmployee {
    private bonus = false;

    constructor(name: string, private salary: number) {
        super(name);
    }

    setBonus(active: boolean) {
        this.bonus = active;
    }

    getSalary(): number {
        //chacking if bonus is active and adding a bonus or just giving salary
        return this.bonus ? this.salary + 1000 : this.salary;
    }
}

class Department {
    private employees: AbstractEmployee[] = [];

    add(e: AbstractEmployee) {
        this.employees.push(e);
    }

    getTotalSalary(): number {
    let total = 0;

        for (let e of this.employees) {
            total += e.getSalary();
        }

        return total;
    }
}

class Contractor {
    constructor(public name: string, public hours: number) {}

    getSalary(): number {
        const hourlyRate = 20;
        return this.hours * hourlyRate;
    }
}

class FreelancePool {
    private contractors: Contractor[] = [];

    add(c: Contractor) {
        this.contractors.push(c);
    }

    getTotalSalary(): number {
    let total = 0;

        for (let c of this.contractors) {
            total += c.getSalary();
        }

        return total;
    }

    showSalaries() {
        for (let c of this.contractors) {
            console.log(c.name + " salary:", c.getSalary());
        }
    }
}


let dev = new Developer("Alice", 2000);
let mgr = new Manager("Bob", 3000);

mgr.setBonus(true);

console.log(dev.name + " salary:", dev.getSalary());
console.log(mgr.name + " salary:", mgr.getSalary());

let dept = new Department();
dept.add(dev);
dept.add(mgr);

console.log("Department salary:", dept.getTotalSalary());

let pool = new FreelancePool();

pool.add(new Contractor("Charlie", 165)); // 50 hours in week
pool.add(new Contractor("Dave", 160)); // 60 hours in week

pool.showSalaries();
console.log("Total freelance salary:", pool.getTotalSalary());