//Partial Utility Type
interface Point {
    x: number;
    y: number;
}

let point: Partial<Point> = {};
point.x = 10;
console.log(point); //{ x: 10}