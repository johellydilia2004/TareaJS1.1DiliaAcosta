// Ejercicio 5: Eliminar duplicados por propiedad
const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

function eliminarDuplicados(arr, propiedad) {
  return arr.filter((item, index, self) => {
    return index === self.findIndex(obj => obj[propiedad] === item[propiedad]);
  });
}

const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);
