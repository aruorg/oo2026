interface Adder {
    //method take a num and add it to sth
    add(nr:number):void;
    //This retuns the total
    getSum():number;
}

class SimpleAdder implements Adder{
    protected sum:number=0

    add(nr: number): void {
        this.sum+=nr;
    
    }
    getSum(): number {
        return this.sum;
    }
}
let adder1:Adder=new SimpleAdder()
adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());

class CharCounter{
    //the contruc. recives an Adder object and stores it inside the class
    constructor(protected adder:Adder){}

    addWordCharacters(word:string): void{
        this.adder.add(word.length);
    }
    getCharacterCount(){
        return this.adder.getSum();
    }
}
let counter1:CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Liisa");
counter1.addWordCharacters("Matthew");
console.log(counter1.getCharacterCount());
