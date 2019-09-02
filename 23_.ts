//Parameter decorator
function ParameterDecorator(
    target: Function, 
    propertyKey: string | symbol,
    parameterIndex: number 
    ) {
        console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}

class ParameterDecoratorExample {
    method(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {
    }
}

ParameterDecorator called on: { method: [Function] } method 1
ParameterDecorator called on: { method: [Function] } method 0

//TIpos de carga de Modulos
/*
    export clas Myclass{...}
    import{myclass} from './class'




//AMD requiserdJS / SystemJs

    define ([], function(){
        return MyClass
    });
    var Test = require('./class');

    */


