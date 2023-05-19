//Required Utility Type
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 200 
};

console.log(myCar);