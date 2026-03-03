var Dog = /** @class */ (function () {
    function Dog(time, obstaclesCompleted) {
        this.time = time;
        this.obstaclesCompleted = obstaclesCompleted;
    }
    //Method to calc score
    Dog.prototype.calculateScore = function () {
        //Max obstacles allowed is 10
        if (this.obstaclesCompleted > 10) {
            this.obstaclesCompleted = 10;
        }
        //one completed obstacle gives 10 points
        return this.obstaclesCompleted * 10;
    };
    Dog.prototype.getTime = function () {
        return this.time;
    };
    Dog.prototype.getObstacles = function () {
        return this.obstaclesCompleted;
    };
    return Dog;
}());
var coco = new Dog(32, 7);
var puffy = new Dog(50, 9);
var roger = new Dog(42, 5);
var dogs = [
    { name: "Coco", dog: coco },
    { name: "Puffy", dog: puffy },
    { name: "Roger", dog: roger },
];
for (var _i = 0, dogs_1 = dogs; _i < dogs_1.length; _i++) {
    var participant = dogs_1[_i];
    var score = participant.dog.calculateScore();
    var time = participant.dog.getTime();
    console.log(participant.name, "Completed", participant.dog.getObstacles(), "obstacles", "in", time, "seconds and got", score, "points.");
}
