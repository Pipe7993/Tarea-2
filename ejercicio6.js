function mayusculas(string){
    return string.toUpperCase();
  }
  
  function minusculas(string){
    return string.toLowerCase();
  }
  
  function resta(num1, num2){
    return num1-num2;
  }
  
  function division(num1, num2){
    return num1/num2;
  }
  
  function multiplicacion(num1, num2){
    return num1*num2;
  }
  
  function longitud(string){
    return string.length;
  }
  
  const fraseMin = "buenas tardes";
  const fraseMay = "BUENAS TARDES"
  const num1 = 9;
  const num2 = 3;
  
  console.log(resta(num1, num2));
  console.log(division(num1, num2));
  console.log(multiplicacion(num1, num2));
  
  
  
  console.log(mayusculas(fraseMin));
  console.log(minusculas(fraseMay));
  console.log(longitud(fraseMay));
  
  