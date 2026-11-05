interface Student {
  id: number;
  name: string;
  course: string;
  marks: number;
}

const student1: Student = { id: 1, name: "Karthik", course: "Software Testing", marks: 88 };
const student2: Student = { id: 2, name: "Priya", course: "Automation Testing", marks: 92 };
const student3: Student = { id: 3, name: "Rahul", course: "API Testing", marks: 79 };

function displayStudent(student: Student): void {
  console.log(`ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Course: ${student.course}`);
  console.log(`Marks: ${student.marks}`);
  console.log("---------------------");
}

displayStudent(student1);
displayStudent(student2);
displayStudent(student3);