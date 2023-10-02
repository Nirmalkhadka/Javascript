console.log("a");
let a=67;
console.log(a);
a='harry';
console.log(a);// a can have integer and string value in js

//rules in nameing variable in js 


//let 8h=8;// writeing number at first in varabile is not allowed in js

var let=9;//but let can be used

console.log(let);

//let var=9;//var is keyword which is reserved for js 

// let, var and const

//var is globally scoped

//let and var are blocked scoped

var b='nirmal';

{
    var b='this';
    console.log(b);
}
console.log(b);
//var doesn't follow rule of {} 
let c='nirmal';

{
    let c='this';
    console.log(c);
}
console.log(c);
//let follow rule of {}
//let can't be re declared

const au='nirmal';
ao='sh';//const can't be changed
const ay;//have to intilize the value in const

