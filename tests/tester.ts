interface Person {
  name: string;
  age: number;
}

interface Tester extends Person {
  technology: string;
  experience: number; // in years
}

const tester1: Tester = {
  name: "Karthik",
  age: 30,
  technology: "playwright",
  experience: 3.5,
};

const tester2: Tester = {
  name: "Priya",
  age: 29,
  technology: "Playwright",
  experience: 5,
};

const tester3: Tester = {
  name: "Rahul",
  age: 25,
  technology: "API Testing",
  experience: 2,
};

function displayTester(tester: Tester): void {
  console.log(`Name: ${tester.name}`);
  console.log(`Age: ${tester.age}`);
  console.log(`Technology: ${tester.technology}`);
  console.log(`Experience: ${tester.experience} years`);
  console.log("---------------------");
}

displayTester(tester1);
displayTester(tester2);
displayTester(tester3);