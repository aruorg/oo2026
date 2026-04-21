abstract class AbstractEmployee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getSalary(): number;

    work(hours: number): number {
        return hours * this.getSalary();
    }

    introduce(): void {
        console.log("Employee: " + this.name);
    }
}

class Developer extends AbstractEmployee {
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        super(name);
        this.baseSalary = baseSalary;
    }

    getSalary(): number {
        return this.baseSalary;
    }
}

class Manager extends AbstractEmployee {
    bonusActive: boolean = false;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        super(name);
        this.baseSalary = baseSalary;
    }

    setBonus(state: boolean) {
        this.bonusActive = state;
    }

    getSalary(): number {
        return this.bonusActive ? this.baseSalary + 1000 : this.baseSalary;
    }

    work(hours: number): number {
        if (this.bonusActive && hours > 10) {
            throw new Error("Overtime not allowed with active bonus mode");
        }
        return super.work(hours);
    }
}

abstract class EmployeeGroup extends AbstractEmployee {
    employees: AbstractEmployee[] = [];

    constructor(name: string) {
        super(name);
    }

    addEmployee(e: AbstractEmployee) {
        this.employees.push(e);
    }
}

class Department extends EmployeeGroup {
    getSalary(): number {
        let total = 0;

        for (let e of this.employees) {
            total += e.getSalary();
        }

        return total;
    }
}

class FreelancePool extends EmployeeGroup {
    getSalary(): number {
        let sum = 0;

        for (let e of this.employees) {
            sum += e.getSalary();
        }

        return this.employees.length === 0 ? 0 : sum / this.employees.length;
    }
}

let dev1 = new Developer("Alice", 2000);
console.log(dev1.getSalary());

let mgr1 = new Manager("Bob", 3000);
console.log(mgr1.getSalary());

mgr1.setBonus(true);
console.log("Manager with bonus:", mgr1.getSalary());

try {
    console.log(mgr1.work(12));
} catch (e) {
    console.log("Error:", (e as Error).message);
}

let dept = new Department("IT Dept");
dept.addEmployee(dev1);
dept.addEmployee(mgr1);

console.log("Department total salary:", dept.getSalary());

let pool = new FreelancePool("Contractors");
pool.addEmployee(new Developer("Charlie", 1500));
pool.addEmployee(new Developer("Dave", 1800));

console.log("Freelance average salary:", pool.getSalary());