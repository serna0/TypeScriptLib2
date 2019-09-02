// Interfaz que asegura que el parametro tenga el metodo length
interface withLength {
    length: number;
}
    // El parametro hereda de la interfaz la cual fuerza al parametro tenga el método length
function echo<T extends withLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}


//Asercion de tipos ASSERT
class Bird {
    fly(){
        console.log("Pajaro");
    }
    layEggs(){
    console.log("Pone huevos");
    }
}

class Fish {
    constructor(){
        // Solo para el ejemplo
    }
    swim(){
        console.log("PEZ")
    }
    layEggs(){
        console.log("Pone huevos");
    }
}

function getAnimal() : Fish | Bird {
    var a : Fish = new Fish();
    return a;
}
    
let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();

// ASERCIÓN
if((<Fish>pet).swim){
    (<Fish>pet).swim();
}else if((<Bird>pet).fly) {
    (<Bird>pet).fly();
}