let a=5;
let b=2;
console.log('a**b=',a**b);//power

let aa= prompt('hey your age');//ask you question



//let g=alert('your are over age');//show message

//let h=confirm('your age is 18');

//type casting 

aa=Number.parseInt(aa,10);//conver the string to number

if(aa>0){
    //alert('this is valid age');
}

console.log(typeof aa);

//number to string

a=a.toString();
console.log(typeof a);//string

//convert to float

let t='3.2some';
t=parseFloat(t);
console.log(t);//3.2

var tt='34';
var h=Number(tt);
console.log(typeof h);

//diff between number() and number.praseint()
/*
praseint represent hex value and it doesn,t specify null,undeifined etc
*/