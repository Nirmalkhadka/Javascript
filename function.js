let a=1;
let b=3;
let c=3;

console.log('avg og a and b=',a+b);
console.log('done');
console.log('avg og a and b=',c+b);
console.log('done');

function one(x,y){
    console.log('done');
    return(x+y);
    
}

console.log('avg og a and b=',one(a,b));
console.log('avg og a and b=',one(c,b));

const sum = (p,q)=>{
    return (p+q)+11;
}
console.log('avg og a and b=',sum(a,b));
console.log('avg og a and b=',sum(c,b));

//this function doesn't take any argument 
const h = ()=>{
    console.log('hellow');
    return 'history';
}
let v=h();
console.log(v);//it will show return not console.log