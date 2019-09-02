let lista ={a:1,b:2,c:3};

for (let i in lista){
    console.log(lista[i]); // a b c
}

//For of

let lista2 = ['a','b','c'];
for (let i of lista2){
    console.log(i); // a b c
}


/*Funciones
setTimeOut(Function(){
    console.log(this);
},2000);

setTimeOut(()=>{
    console.log(this)
},2000);
*/


// para poder definir tipos utilizaremos el O lógico
function padLeft(value: string, padding: string | number) {
    if(typeof padding === "number"){
    return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string") {
    return Array(padding.length + 1).join(" ") + value;
    }
    
    throw new Error(`Expected String or number, got '${padding}' `);
    }
    console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
    console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
    //console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCION

    // Compiled with --strictNullChecks
    //function validateEntity(e: Entity?) {
    // Throw exception if e is null or invalid entity
    //}
    //function processEntity(e: Entity?) {
    //validateEntity(e);
    //let s = e!.name; 
    //}