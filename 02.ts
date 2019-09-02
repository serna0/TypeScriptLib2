//string literal type
let liternalString = 'Hello';
/*  Error
 liternalString = "Bye";
*/

type CardinalDirection="North"|"East"|"South"|"West";
function move(distance:number, direction:CardinalDirection){
    //...
}

move(1,"North"); //OK
move(1,"Nurth"); //Error