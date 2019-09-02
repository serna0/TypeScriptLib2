//------ main.ts --------
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next()); // 0, false 
console.log(iterator.next()); // 1,false 
console.log(iterator.next()); // undefined,true 
