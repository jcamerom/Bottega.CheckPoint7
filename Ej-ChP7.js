/* Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, 
luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, 
la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!" */
function compararSumasYMultiplicar(num1, num2, num3, num4) {
    let suma1 = num1 + num2;
    let suma2 = num3 + num4;
    let resultado = suma1 * suma2;
  
    if (resultado > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  }
  
  // Ejemplo de uso
  compararSumasYMultiplicar(1, 2, 3, 2); // Imprime "¡El número es menor que 50!"
  compararSumasYMultiplicar(15, 30, 2, 10); // Imprime "¡El número es mayor que 50!"
  