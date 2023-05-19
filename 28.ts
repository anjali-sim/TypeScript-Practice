//Pick Utility Type
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Pick<Person, "name"> = {
    name: "bob"
};

console.log(bob);