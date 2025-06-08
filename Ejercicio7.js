// Ejercicio 7: Contar cuántas veces aparece cada elemento
function contarPalabras(palabras) {
  const conteo = {};

  for (const palabra of palabras) {
    if (conteo[palabra]) {
      conteo[palabra]++;
    } else {
      conteo[palabra] = 1;
    }
  }

  return conteo;
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];
const resultado = contarPalabras(palabras);
console.log(resultado);



