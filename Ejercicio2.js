// Ejercicio 2: Promesas encadenadas
function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: id,
        nombre: id === 1 ? 'Juan' : 'María'
      };
      resolve(usuario);
    }, 1000); 
  });
}

obtenerUsuario(1)
  .then((usuario1) => {
    return obtenerUsuario(2).then((usuario2) => {
      console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    });
  });
