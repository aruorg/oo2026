//Abstract class or Parent class
abstract class AbstractResistor{
    //This function must be created in child classes
    abstract getResistance():number;

    getCurrent(u:number):number{
        return(u/this.getResistance());
    }
}

class Resistor extends AbstractResistor{

    r: number;

    constructor(r:number){
        super();
        this.r=r;
    }

    getResistance(): number {
        return this.r;
    }

}

let resistor1 = new Resistor(20);

console.log("The resistance value of resistor 1: " + resistor1.getResistance());

class Switch extends AbstractResistor{
    //default state is SWITCH is off
    on:boolean = false;

    setOn(state:boolean){
        this.on=state;
    }

    /*getResistance(): number {
        if(this.on){
            return 0;
        } else {
            return 1000000000;
        }
    }*/

    getResistance(): number {
       return (this.on ? 0:1000000000);
    }

    getCurrent(u: number): number {
        if(u>0){
            if(this.on){
                throw new Error("Short circuit")
            }
        }
        return super.getCurrent(u);
    }
}

//Function that takes an AbstractResistor and prints its resistance
function printResistance(r:AbstractResistor) {
    console.log(resistor1.getResistance());
}

let resistor2 = new Switch();
console.log("The initial resistance value when it is off: " + resistor2.getResistance());
resistor2.setOn(true)
console.log("The resistance value when the switch is on: " + resistor2.getResistance());

try{
    console.log(resistor2.getCurrent(5));
    
} catch (e) {
    console.log("Caught error:", (e as Error).message);
}
//console.log(resistor2.getCurrent(5));
//resistor2.setOn(false);
resistor2.setOn(false);
console.log(resistor2.getCurrent(5));
printResistance(resistor2);

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = [];

    addResistor(r:AbstractResistor){
        this.resistors.push(r);
    }
}

class SeriesConection extends MultipleConnection{
    getResistance(): number {
        let totalResistance:number = 0;

        for (let resistor of this.resistors){
            totalResistance += resistor.getResistance();
        };
        return totalResistance;
    }
}

class ParallelConection extends MultipleConnection{
    getResistance(): number {
        let inverseSum:number = 0;

        for (let resistor of this.resistors){
            inverseSum += (1/resistor.getResistance());
        };
        return 1/inverseSum;
    }
}

let r3:SeriesConection = new SeriesConection();
r3.addResistor(new Resistor(220));
r3.addResistor(new Resistor(220));
console.log("Resistance of series connection " + r3.getResistance() + " ohms");

let r4:ParallelConection = new ParallelConection();
r4.addResistor(new Resistor(220));
r4.addResistor(new Resistor(220));
console.log("Resistance of parallel connection " + r4.getResistance() + " ohms");