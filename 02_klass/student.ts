class Student{
    constructor(protected mathGrade:number, protected englishGrade:number){}
    //method to show grades while they are protected
    show(): void{
        console.log(this.mathGrade, this. englishGrade);
    }


//method to calculate average
    average():number {
    return(this.mathGrade + this.englishGrade)/2;
    } 

// Method to add the grades of the same subject
    add(other:Student):Student{
    return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    }

    averageMath(count:number){
        return this.mathGrade/count;
    }

    improveMath():void{
        this.mathGrade += 6;
    }
}
let s1: Student=new Student(84, 90);
let s2: Student=new Student(54, 70);

//Array of students
let students: Student[]=[
    new Student(78, 99),
    new Student(70,50)
]

// combine all s in total
let classTotal=students[0];

for(let i=1; i<students.length; i++){
    classTotal=classTotal.add(students[i]);
}


const n=students.length;
console.log("class average", classTotal.averageMath(n));


//console.log(s1.mathGrade);
s1.show();
console.log("Average grade for student1: " + s1.average());
let combined=s1.add(s2);
combined.show();
console.log("Average of both students: " + combined.averageMath(2));
s1.improveMath();
s1.show();
