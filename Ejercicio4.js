// Ejercicio 4: Copiar y modificar objetos
const persona = { nombre: 'Luis', edad: 30 };

function modificarPersona(persona, nuevoNombre) {
  const copia = {
    nombre: nuevoNombre,
    edad: persona.edad + 1
  };

  return copia;
}

const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona); 