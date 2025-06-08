// Ejercicio 3: Calcular el promedio ponderado 
const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

function promedioPonderado(arreglo) {
  let suma = 0;

  for (const nota of arreglo) {
    suma += nota.valor * nota.peso;
  }

  return suma;
}

const resultado = promedioPonderado(notas);
console.log(resultado); 
