//Then
const promise = new Promise((resolve, reject) => {
    resolve(123);
});

promise.then((res) => {
    console.log('I get called:', res === 123); // Devuelve: true
});

promise.catch((err) => {
    // Nuca es utilizado
});

/*Ejemplo llamada a cath

const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});
promise.then((res) => {
    // This is never called
});

promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo maloa pasado'
});



*/