let c=document.getElementById('com');
c.style.color='blue';

let cd=document.querySelectorAll('#com1');
for(let i=0;i<cd.length;i++){
cd[i].style.color='red';
}

console.log(document.getElementsByTagName('th'));

console.log(document.querySelector('.ls').getElementsByTagName('th'))

let bb=document.getElementById('com1');
console.log(bb);

console.log(bb.matches('.com'))//by css selector it match class name