//object is just collection of named values

let a={
    name:'nirmal',
    age:22
}
document.write(a.name);//prints name


//looping in object properties
for(let i in a){
    document.write(a[i]+'<br>')
}

//putting new property in a

a.country='nepal';

document.write(a.country);//nepal

//deleting property

delete a.age;

document.write(a.age);//unidentified


//calling method
a.dispalyname();