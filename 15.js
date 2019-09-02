//Generators
function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++;
    }
}

var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}

//array u objeto
function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}

let gen = idMaker();
console.log(gen.next()); // value: 0, done: false }
console.log(gen.next()); // 1, false 
console.log(gen.next()); // 2, false 
console.log(gen.next()); // undefined, true