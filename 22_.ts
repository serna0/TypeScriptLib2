//Method Decorator
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MethodDecorator
    method() {
    }
}

MethodDecorator called on: { method: [Function] } method { value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
}

//Static Method Decorator
function StaticMethodDecorator(
    target: Function, // the function itself and not the prototype
    propertyKey: string | symbol, // The name of the static method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}    

class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}

StaticMethodDecorator called on: function StaticMethodDecoratorExample() {
}