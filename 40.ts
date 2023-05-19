interface myName{
    name: string;
    age: undefined;
}

const myobj: myName = {
    name: "anjali",
    // age: undefined,
}

//If we have a property of type undefined in an interface, then when we create
//an object of it, then we need to specify that property with the value undefined
//otherwise, we will get error. 
