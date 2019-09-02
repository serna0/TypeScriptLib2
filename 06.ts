//Genericos
function echo<T>(arg: T) : T {
    return arg;
    }
    let a = echo<number>(1); 
    let b = echo<String>("Hola mundo");

    class Generic<T> {
        add: (X: T, y:T) => T;
    }
    
    let myGeneric = new Generic<number>();
    console.log(myGeneric.add = function (x,y) {return x + y});
    console.log(myGeneric.add(3,4));
        