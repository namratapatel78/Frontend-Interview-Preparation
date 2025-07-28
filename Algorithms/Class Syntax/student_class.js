class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName; // this refers to current instance or object created from the class
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){ // Instance methods can be added to classes similar to methods in object
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){ // Instance method - used with instance of class
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    static EnrollStudents(){ // Class method - used with class and cannot be used with instance of class
        return "ENROLLING STUDENTS!"
    }

}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

firstStudent.fullName();
firstStudent.tardies;
firstStudent.markLate();
firstStudent.tardies;
firstStudent.markLate();
firstStudent.markLate();
firstStudent.tardies;

secondStudent.addScore(92);
secondStudent.scores.push(85);

Student.EnrollStudents();