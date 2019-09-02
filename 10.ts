//Como funciona la herencia
class Adder {
    
    add = (b: string): string => {
        return 1 + b;
    }
}
class ExtendedAdder extends Adder {
    
    private superAdd = this.add;
    add = (b: string): string => {
    return this.superAdd(b);
    }
}


// A curried function
let add = (x: number) => (y: number) => x + y;
// Simple usage
add(123)(456);
// partially applied
let add123 = add(123);
// fully apply the function
add123(456);