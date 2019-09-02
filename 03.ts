//Array
let list: number[] = [1,2,3];
let list2:Array<number> = [1,2,3];
//Null and undefined
let ab: null;

console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

//Tuple / Tuplas

let x:[string,number];
x=["hello",23];
//Error x=[23,"asdas"];

//Acceder adentro
console.log(x[0].substr(1));


//Enum
enum Direction {
    Up = 1, 
    Down = NaN,
    Left = "asdasd".length,
    Right = 1 << 1
    }
    var a = Direction.Up;
    console.log(Direction.Down);