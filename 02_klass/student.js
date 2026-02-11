var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //method to show grades while they are protected
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    //method to calculate average
    Student.prototype.average = function () {
        return (this.mathGrade + this.englishGrade) / 2;
    };
    // Method to add the grades of the same subject
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    Student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
    };
    Student.prototype.improveMath = function () {
        this.mathGrade += 6;
    };
    return Student;
}());
var s1 = new Student(84, 90);
var s2 = new Student(54, 70);
//Array of students
var students = [
    new Student(78, 99),
    new Student(70, 50)
];
// combine all s in total
var classTotal = students[0];
for (var i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
var n = students.length;
console.log("class average", classTotal.averageMath(n));
//console.log(s1.mathGrade);
s1.show();
console.log("Average grade for student1: " + s1.average());
var combined = s1.add(s2);
combined.show();
console.log("Average of both students: " + combined.averageMath(2));
s1.improveMath();
s1.show();
