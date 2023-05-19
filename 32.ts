//Generics
function getArray<T>(items: T[]) : T[] {
    return new Array<T>().concat(items);
}

let numArr = getArray<number>([16, 2.0, 55]);
let strArr = getArray<string>(["Hello", "World"]);

numArr.push(400);
strArr.push("Hello TypeScript");

console.log(numArr, strArr);
//[16, 2.0, 55, 400] ["Hello", "World", "Hello TypeScript"]