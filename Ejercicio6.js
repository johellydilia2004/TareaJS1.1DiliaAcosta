// Ejercicio 6:  Combinar dos listas sin repetir elementos
function combinarListasSinRepetir(lista1, lista2) {
  const resultado = [];

  for (const item of lista1.concat(lista2)) {
    if (!resultado.includes(item)) {
      resultado.push(item);
    }
  }

  return resultado;
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);
