class Calculo {
    private x: number = 0;
    private y: number = 0;

    constructor (x: number, y: number){
        this.setX(x);
        this.setY(y);
    }

    public setX(x: number) : void{
        this.x = x;
    }

    public setY(y: number) : void{
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
    
    public sumar() : number {
        return (this.getX() + this.getY());
    }
        
    public restar() : number{
        return ( this.mayor() - this.menor() );
    }
        
    public menor() : number {
        if(this.getX() >= this.getY()) {
            return this.getY();
        }
            return this.getX();
    }
        
    public mayor() : number {
        if(this.getX() >= this.getY()) {
            return this.getX();
        }
            return this.getY();
    }
}

let calculo = new Calculo(30,10);
console.log(calculo.restar());


//Propiedades estaticas
class Something{
    static instances=0;
    constructor(){
        Something.instances++;
    }
}
var s1= new Something();
var s2= new Something();
console.log(Something.instances);


//Modificadores en Clases
class FooBase {
    public x2: number;
    private y2: number;
    protected z2: number;
}

//Instancia
var foo = new FooBase();
foo.x2; // OK
//foo.y2; // ERROR : private
//foo.z2; // ERROR : protected

//Clase Hija
class FooChild extends FooBase {
    constructor() {
    super();
    this.x2; // OK
    //this.y2; // ERROR: private
    //this.z2; // okay
    }
}
    
//IIFE

class Point { //Padre
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

class Point3D extends Point { //Clase hijaa
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    //add
    add(point: Point3D) {
    // llamada apadre
        var point2D = super.add(point);
    // devolvemos resultado
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
    
//USO DE HERENCIA
class Animal {
    name: string;
    
    constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Rhino extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Elephant extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let arrays : Animal[] = [ new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton") ];
let ej2 = {Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton")};

console.log(arrays);