// Ejercicio 9: Simular carga con promesa y setTimeout
function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 2000); 
  });
}

cargarDatos().then((mensaje) => {
  console.log(mensaje);
});

