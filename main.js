import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest !");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Whom Do You Want To Talk To ?",
            name: "select",
            choices: ["Myself", "Student"]
        });
        if (ans.select == "Myself") {
            console.log("Hello I am Talking To Myself");
            console.log("My Health is Good !");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Which Student Do You Wanna Talk To ?",
                name: "student"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name} , and I am Alright !`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I am ${student.name} , and I am Alright !`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
