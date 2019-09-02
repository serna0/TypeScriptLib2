//Cadenas de promesas o chain ability
/*
Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res); // not called
        return 456;
    })
    .then((res) => {
        console.log(res); // not called
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res); // not called
        return Promise.resolve(123);
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
    });
*/

//JSON de forma asincrona
// good json file
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('good.json error', err.message); // never called
    })
// non-existent json file
.then(function () {
    return loadJSONAsync('absent.json');
    })
    .then(function (val) { console.log(val); }) // never called
    .catch(function (err) {
        console.log('absent.json error', err.message);
    })
// invalid json file
    .then(function () {
        return loadJSONAsync('bad.json');
    })
    .then(function (val) { console.log(val); }) // never called
    .catch(function (err) {
        console.log('bad.json error', err.message);
    });
