//Devolver un objeto literal  e fat arrow
var foo = ()=>{
    bar: 123;
};
console.log(foo);

//Funciona anomina
function () {
    bar: 123;
};


// fat arrow
var foo = ()=>({
    bar: 123
});
//Optendremos
function () { return ({
    bar: 123
}); };






//Clases Estaticas
void called() {
    static count = 0;
    count++;
    printf("Called : %d", count);
}
int main () {
    called(); // 1
    called(); // 2
    return 0;
}
    
const {called} = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};
    
called(); // 1
called(); // 2