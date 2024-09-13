const color = () =>{
    document.body.firstElementChild.style.background ="red"
}

let b=document.body;
console.log('first child of b=',b.firstChild);
console.log('first element child of b=',b.firstElementChild);//it will give element child and remove space

//table dom

let t=document.body.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tFoot);