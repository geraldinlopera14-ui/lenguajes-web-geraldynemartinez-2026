const libros = [
  { titulo: "El Aleph", autor: "Borges", ventas: 500, stock: 10 },
  { titulo: "Rayuela", autor: "Cortázar", ventas: 1200, stock: 2 },
  { titulo: "Ficciones", autor: "Borges", ventas: 850, stock: 5 },
  { titulo: "100 años de soledad", autor: "García Márquez", ventas: 3000, stock: 0 },
];

const librosMasVendidos = libros
  .filter(libro => libro.ventas > 1000)
  .map(libro => libro.titulo);
console.log("Libros con más de 1000 ventas:", librosMasVendidos);

const ventasBorges = libros
  .filter(libro => libro.autor === "Borges")
  .reduce((acumulador, libro) => acumulador + libro.ventas, 0);
console.log("Total ventas de Borges:", ventasBorges);

const disponibilidadLibros = libros
  .map(libro => ({
    titulo: libro.titulo,
    estado: libro.stock === 0 ? "Agotado" : "Disponible",
    ventas: libro.ventas
  }))
  .sort((a, b) => b.ventas - a.ventas);

console.log("Disponibilidad y orden:", disponibilidadLibros);