//Intersection(&)
type Person = {
    name: string;
  };
  
  type Employee = {
    company: string;
  };
  
  type PersonEmployee = Person & Employee;
  
  let person: PersonEmployee = {
    name: "John",
    company: "ABC Company",
  };

//Union(|)
type Person2 = {
    name: string;
    age: number;
  };
  
  type Employee2 = {
    company: string;
    role: string;
  };
  
  type PersonOrEmployee = Person2 | Employee2;
  
  let person11: PersonOrEmployee = {
    name: "John",
    age: 30,
    company: "ABC",
    role: "student"
  };
  
  let employee: PersonOrEmployee = {
    company: "ABC Company",
    role: "Manager",
  };

//Extends
  type Person = {
    name: string;
    age: number;
  };
  
  type Employee extends Person = {
    company: string;
    role: string;
  };
  
  let employee: Employee = {
    name: "John",
    age: 30,
    company: "ABC Company",
    role: "Manager",
  };