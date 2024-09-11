const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if(numero1 > numero2 && numero1 > numero3) {
  console.log("el numero mayor es: "+ numero1);
} 
if(numero2 > numero1 && numero2 > numero3) {
  console.log("el numero mayor es: "+ numero2);  
}
if(numero3 > numero1 && numero3 > numero2) {
  console.log("el numero mayor es: "+ numero3);  
}

if(numero1 < numero2 && numero1 < numero3) {
  console.log("el numero menor es: "+ numero1);
} 
if(numero2 < numero1 && numero2 < numero3) {
  console.log("el numero menor es: "+ numero2);  
}
if(numero3 < numero1 && numero3 < numero2) {
  console.log("el numero menor es: "+ numero3);  
}

if(numero1%2 == 0) {
  console.log("El numero 1: " +numero1+ " es par");
} else {
  console.log("El numero 1: " +numero1+ " es impar");
}

if(numero2%2 == 0) {
  console.log("El numero 2: " +numero2+ " es par");
} else {
  console.log("El numero 2: " +numero2+ " es impar");
}

if(numero3%2 == 0) {
  console.log("El numero 3: " +numero3+ " es par");
} else {
  console.log("El numero 3: " +numero3+ " es impar");
}

if (numero1%5 == 0){
  console.log("El numero 1: " +numero1+ " es multiplo de 5");  
} else {
  console.log("El numero 1: " +numero1+ " NO es multiplo de 5"); 
}

if (numero2%5 == 0){
  console.log("El numero 2: " +numero2+ " es multiplo de 5");  
} else {
  console.log("El numero 2: " +numero2+ " NO es multiplo de 5"); 
}

if (numero3%5 == 0){
  console.log("El numero 3: " +numero3+ " es multiplo de 5");  
} else {
  console.log("El numero 3: " +numero3+ " NO es multiplo de 5"); 
}