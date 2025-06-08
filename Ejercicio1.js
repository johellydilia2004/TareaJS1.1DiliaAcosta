// Ejercicio 1: Agrupar elementos por una propiedad
const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

function agruparPorPropiedad(arreglo, propiedad) {
  const agrupado = {};

  for (const item of arreglo) {
    const clave = item[propiedad];

    if (!agrupado[clave]) {
      agrupado[clave] = [];
    }

    agrupado[clave].push(item);
  }

  return agrupado;
}

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);


