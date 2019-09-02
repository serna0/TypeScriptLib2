//Type Alias
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;




//Type Union

interface Bird {
    fly();
    layEggs(); // Los 2 pueden
}
interface Fish {
    swim();
    layEggs(); // Los 2 pueden
}
function getAnimal() : Fish | Bird {
    var a : Fish;
    return a;
}

let pet = getAnimal();
pet.layEggs(); // Esto funcionaría
pet.swim() // Esto da error

    