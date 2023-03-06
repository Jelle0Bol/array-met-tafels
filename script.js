const arr = [2,4,6,8];

for (let k = 0; k < arr.length; k++) {
    document.write('Dit is de tafel van: ' + arr[k] + '<br>');
    for (let i=1; i<=10; i++){
        cijfer = (arr[k] + " * " + i + " = " + arr[k]*i);  

        document.write(cijfer + '<br>');
    }
    document.write('<br>');
}