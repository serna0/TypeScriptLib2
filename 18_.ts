//Interfaces
interface a{
    a: number;
}
interface b extends a{
    c: string;
}

class tests implements b{
    b:number;
    c:string;
    constructor(b: number, c:string){
        this.b=b;
        this.c=c;
    }
}