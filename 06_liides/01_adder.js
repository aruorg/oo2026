var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());
var CharCounter = /** @class */ (function () {
    //the contruc. recives an Adder object and stores it inside the class
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Liisa");
console.log(counter1.getCharacterCount());
