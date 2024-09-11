function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function promedioArray(array) {
  return sumaArray(array)/array.length;
}

function arrayMayus(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
        array2.push(array[i].toUpperCase());
    }
  return array2;
}

function arrayPares(array) {
  let array2 = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 == 0){
          array2.push(array[i]);
        }
    }
    return array2;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ["a", "us", "Yus", "hao"];



console.log(sumaArray(array))
console.log(promedioArray(array))
console.log(sumaArray(array))
console.log(arrayMayus(array2));
console.log(arrayPares(array));



