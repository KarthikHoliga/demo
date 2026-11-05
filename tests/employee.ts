interface Employee {
  empId: number;
  empName: string;
  department: string;
  salary: number;
}

const employees: Employee[] = [
  { empId: 101, empName: "Karthik", department: "QA", salary: 45000 },
  { empId: 102, empName: "Priya", department: "Development", salary: 65000 },
  { empId: 103, empName: "Rahul", department: "QA", salary: 52000 },
  { empId: 104, empName: "Sneha", department: "HR", salary: 48000 },
  { empId: 105, empName: "Arjun", department: "DevOps", salary: 75000 },
];

const highEarners: Employee[] = employees.filter((emp) => emp.salary > 50000);

console.log("Employees earning more than ₹50,000:");
highEarners.forEach((emp) => {
  console.log(`${emp.empId} | ${emp.empName} | ${emp.department} | ₹${emp.salary}`);
});