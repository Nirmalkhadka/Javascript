//search
let st='nirmal is good coder nir';
let p=st.search(/good/);
if(p>=0){
    document.write('good postion=',p,'<br/>')
}
else
document.write('good does not appear in this senteen')

//replace

let s='visit microsoft';
let r=s.replace(/microsoft/i,'goggle');
document.write(r+'<br>');

//match()
r=st.match(/(nir)\w*/g);
document.write(r+'<br>');