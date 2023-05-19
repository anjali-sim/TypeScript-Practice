//Omit Utility Type
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
    name: "bobo" //removed age and location and they cant be defined here
};
console.log(bob);