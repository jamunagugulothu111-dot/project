import { employees } from './file1.js'
// 1. Names of employees from Hyderabad
const hydEmployees = employees
  .filter(emp => emp.address.city === "hyderabad")
  .map(emp => emp.name);

console.log("Hyderabad Employees:", hydEmployees);


// 2. Name and address of employees whose age is between 40 and 50
const ageEmployees = employees
  .filter(emp => emp.age >= 40 && emp.age <= 50)
  .map(emp => ({
    name: emp.name,
    address: emp.address
  }));

console.log("Age between 40 and 50:", ageEmployees);


// 3. Employees who are not from Hyderabad
const notHyd = employees
  .filter(emp => emp.address.city !== "hyderabad");

console.log("Not from Hyderabad:", notHyd);


// 4. Names of employees whose skill is "reactjs"
const reactEmployees = employees
  .filter(emp => emp.skills.includes("reactjs"))
  .map(emp => emp.name);

console.log("ReactJS Employees:", reactEmployees);