let f=['apple','bananna','mango','orange','papaya'];
document.write(f[0]+'<br>');


f.push('watermellon');
document.write(f+'<br>');
//it will push water mellon in last place

f.unshift('kiwi');
document.write(f+'<br>');//it will add kiwi in first place

f.pop();
document.write(f+'<br>');//it will pop last element
//last one

f.shift();
document.write(f+'<br>');//it pop fist element

//adding and removing element at any position

//splice() method is used to remove or add element in any position using index

let g=f.splice(0,1);//it will remove first element
document.write(g+'<br>');//it will print which element is removed
document.write(f+'<br>');

g=f.splice(3,1,'dragon','ball','grol');//it will insert 2 element in 3rd palce
//where 3=palce where element will be added or removed
//1=number of element to be removed
//after 1 element to be added in array
document.write(g+'<br>');//it will show empty because it hasn't removed any element
document.write(f+'<br>'); 

var colors = ["Red", "Green", "Blue"];
document.write(colors.join()); // Prints: Red,Green,Blue
document.write(colors.join("")); // Prints: RedGreenBlue
document.write(colors.join("-")); // Prints: Red-Green-Blue

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var subarr = fruits.slice(1, 3);
document.write(subarr); // Prints: Banana,Mango

var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
// Creating new array by combining pets and wilds arrays
var animals = pets.concat(wilds);// (OR combine multiple arrays as pets.concat(wilds, bugs);)
document.write(animals+'<br>'); // Prints: Cat,Dog,Parrot,Tiger,Wolf,Zebra

//shorting an array
var s=f.sort()
document.write(s+'<br>');

//reversing an array
s=f.reverse();

function comp(a,b){
    return a-b;
 }//we have to use funcion to short number

let ao=[1,2,3,499,11,2];



s=ao.sort(comp);//it only look for first elemnt ot will not sort
//result=1,11,2,2,3,499


document.write(s);

//looping in array

let nun=[2,3,4,5];

//for each loop

nun.forEach((ele) =>{
    console.log(ele*ele);
})


//array.from
let name='nirmal'
let arrr=Array.from(name);
console.log(arrr);
/*output= ['n', 'i', 'r', 'm', 'a', 'l']
0
: 
"n"
1
: 
"i"
2
: 
"r"
3
: 
"m"
4
: 
"a"
5
: 
"l"
*/


//for..........of
for(let i of nun){
    console.log(i);
}

nun.map((val, index, array) =>{
console.log(val,index,array);
return val + index;
})
console.log(nun);

let as=nun.filter((a)=>{
    return a<4
})
console.log(as);

let ass=nun.reduce((a,b)=>{
    return a+b
})
console.log(ass);//it will sum all element in num and give output 14