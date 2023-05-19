const logMsg = (message: any): void => {
    console.log(message)
}

const addAll = (a: number,b: number,c?: number): number =>
{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b
}

const sumAll = (a: number=10, b: number, c: number=2):number => {
    return a+b+c
}

logMsg(addAll(2,3,2)) //7
logMsg(addAll(2,3)) //5
logMsg(sumAll(2,3)) //if default parameter not provided to a, then output is 7
logMsg(sumAll(undefined, 3)) //15

const total = (a: number, ...nums: number[]): number => {
    return a+nums.reduce((prev, curr) => prev+curr)
}
logMsg(total(1,2,3))