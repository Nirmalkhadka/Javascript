//date and time are built in js object

let d=new Date();
document.write(d);//this will give current time

 document.write(d.toDateString()); // Fri Jul 12 2017
 document(d.toLocaleDateString()); // 7/12/2017
 document(d.toLocaleTimeString()); // 12:34:30 PM

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
    document.write(getRandomInt(3)); // Expected output: 0, 1 or 2