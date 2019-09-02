//Namespace 93

// Mod. interno Tsc
namespace MySpace {
    export class MyClass {
    public static myProperty: number = 1;
    }
 }

 //DOs tipos de namespace
 console.log(MySpace.MyClass.MyProperty);
 // y
import {MySpace} from 'namespace.ts'; // Cuidado
console.log(MySpace.MyClass.MyProperty);
