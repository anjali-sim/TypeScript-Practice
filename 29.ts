//Exclude Utility Type
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;

console.log(typeof value);