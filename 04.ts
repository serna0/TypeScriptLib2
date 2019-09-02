// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;


var fooId: FooId;
var barId: BarId;
// Por seguridad
//fooId = barId; // error
//barId = fooId; // error
// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;
// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;

//Any

let notSure: any = 4;
notSure = "maybe a string instead"; // typeof = string
notSure = false;; // typeof = boolean
notSure.ifItExists(); // OK, ifItExists puede existir
notSure.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
//prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en un 'Object'.


//Void
function warnUser(): void {
    alert("This is my warning message");
} let unusable: void = undefined;


//Let
var foo= 123;
if(true){var foo=456};
console.log(foo); //456

let foo2=123;
if(true){let foo2=456};
console.log(foo2); //123


/*Constantes
    Permitido const foo=123;
    foo=456; //Error

    const foo = {bar:123};
    foot={bar:456} //Error

    const foo={bar:123}
    foo.bar=456;
    console.log(foo);


    */

