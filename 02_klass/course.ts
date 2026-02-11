//GPA calc

class Course{
    constructor(protected credits:number){}

    //Methon with formula to find GPA
    gpaContribution(grade:number):number{
        return grade*this.credits;
    }
    
    getCredits():number{
       return this.credits
    }
}

let math = new Course(4);
let english = new Course(6);
let programming = new Course(2);

//
let mathGrade=4.0;
let englishGrade=3.3;
let programmingGrade=3.7;

let totalPoints=0;

totalPoints +=math.gpaContribution(mathGrade);
totalPoints +=english.gpaContribution(englishGrade);
totalPoints +=programming.gpaContribution(programmingGrade);

let totalCredits=math.getCredits() + english.getCredits() + programming.getCredits();

//Total points / total credits
let gpa= totalPoints/totalCredits;
console.log("My gpa is: ", gpa);

//Create array to pass grades of many students
let students1 = [
    {name:"Alice", math:4.0, english:3.3, programming:3.7},
    {name:"Bob", math:3.0, english:3.0, programming:2.7},
    {name:"Max", math:3.0, english:3.8, programming:1.7},

];

//calculate the gpa for each student
for(let student of students1){
    let totalPoints=0;

    totalPoints +=math.gpaContribution(student.math);
    totalPoints +=english.gpaContribution(student.english);
    totalPoints +=programming.gpaContribution(student.programming);

    let gpa=totalPoints/totalCredits;
    console.log(student.name + " GPA", gpa);
    let roundGpa:number = Math.round(gpa*100/100);
    return roundGpa;

}
