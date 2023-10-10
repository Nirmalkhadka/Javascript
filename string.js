let s='hello world';
let len=s.length;
console.log(len);

//string methods

let h=s.charAt(2);
console.log(h);//will return specfic index(postion)

h=s.indexOf('l');
console.log(h);//it will select first l postion

h=s.substring(4,8);
console.log(h);//o wo

//uppercase to lowercase

h=s.toUpperCase();
console.log(h);

h=s.slice(0,5);
console.log(h);

h=s.replace('hello','hi');
console.log(h);

var fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
var fruitsArr = fruitsStr.split(", ",2); //output: Apple,Banana
console.log(fruitsArr)

var str = "INTERSTELLAR";
var strArr = str.split(""); // strArr[0] is I, strArr[1] is N etc
console.log(strArr)