abstract class AbstractResistor{
    //this fun. must be created in child classes
    abstract getResistance():number;

    getCurrent(u:number):number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r:number;

    constructor(r:number){
        super();
        this.r=r;
    }

    getResistance(): number {
        return this.r;
    }

}

class Switch extends AbstractResistor{
    //Default state is switch OFF
    on:boolean = false;

    setOn(state:boolean){
        this.on=state;
    }
    
    getResistance(): number {
        if (this.on){
            return 0;
        }
        else{ 
            return 100000000;
        }
    }
    //For two value if statements
    //getResistance(): number{
    //    return(this.on ? 0:10000000);
    //}

    getCurrent(u: number): number {
        if (u > 0){
            if(this.on){
                throw new Error("Short curcuit");
            }
        }
        return super.getCurrent(u);
    }
}



let s1=new Switch();
console.log("The initaial value of the resistor 1 when it is off is " + s1.getResistance());
s1.setOn(true);
console.log("The initaial value of the resistor 1 when it is on is " + s1.getResistance());
console.log(s1.getCurrent(-10))
s1.setOn(false);
console.log(s1.getCurrent(-10))

