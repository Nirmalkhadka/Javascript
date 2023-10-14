function car(make,model,yera){
    this.make=make;
    this.model=model;
    this.yr=yera;
}

let mycar= new car('alto','ford','1919');

for(let i in mycar){
    document.write(mycar[i]+'<br>');

}

document.write(mycar.display());