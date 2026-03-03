class Dog{
    constructor(protected time:number, protected obstaclesCompleted:number){}

    //Method to calc score
    calculateScore():number{

        //Max obstacles allowed is 10
        if(this.obstaclesCompleted > 10){
            this.obstaclesCompleted = 10;
        }

        //one completed obstacle gives 10 points
        return this.obstaclesCompleted * 10;
    }
    
     getTime():number{
        return this.time;
     }

     getObstacles():number{
        return this.obstaclesCompleted;
     }

}

let coco = new Dog(32, 7);
let puffy = new Dog(50, 9);
let roger = new Dog(42, 5);

let dogs = [
    {name:"Coco", dog:coco},
    {name:"Puffy", dog:puffy},
    {name:"Roger", dog:roger},
];

for(let participant of dogs){
    let score = participant.dog.calculateScore();
    let time = participant.dog.getTime();

    console.log(participant.name, "Completed", participant.dog.getObstacles(), "obstacles", "in", time, "seconds and got", score, "points.");
}