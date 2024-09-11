const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if(numero1 > numero2){
  console.log("el numero 1: "+ numero1 +" es mayor que el numero 2: "+numero2);
} else if (numero1 < numero2){
  console.log("el numero 1: "+ numero1 +" es menor que el numero 2: "+numero2);
} else {
  console.log("el numero 1: "+ numero1 +" es igual que el numero 2: "+numero2);
}

if (numero1 < numero3) {
    console.log("el numero 1: "+ numero1 +" es mayor que el numero 3: "+numero3);
} else {
    console.log("el numero 1: "+ numero1 +" es menor que el numero 3: "+numero3); 
}

if (numero3 < numero2) {
    console.log("el numero 3: "+ numero3 +" es mayor que el numero 2: "+numero2);
} else {
    console.log("el numero 3: "+ numero3 +" es menor que el numero 2: "+numero2);
}