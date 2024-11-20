// =======================
// Método .concat()
// =======================
// Combina dos o más arreglos y devuelve un nuevo arreglo sin modificar los originales.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinado = array1.concat(array2); // [1, 2, 3, 4, 5, 6]

// =======================
// Método .push() y .pop()
// =======================
// .push() añade elementos al final del arreglo, .pop() elimina el último elemento.
let miArray = [1, 2, 3];
miArray.push(4); // miArray es ahora [1, 2, 3, 4]
let ultimoElemento = miArray.pop(); // miArray vuelve a ser [1, 2, 3] y ultimoElemento es 4

// =======================
// Método .shift() y .unshift()
// =======================
// .shift() elimina el primer elemento y .unshift() añade elementos al inicio del arreglo.
let lista = ["a", "b", "c"];
lista.unshift("z"); // lista es ["z", "a", "b", "c"]
let primerElemento = lista.shift(); // lista es ["a", "b", "c"] y primerElemento es "z"

// =======================
// Método .flat()
// =======================
// Aplana arreglos anidados en una sola profundidad.
let arregloAnidado = [1, [2, 3], [4, [5, 6]]];
let arregloPlano = arregloAnidado.flat(2); // [1, 2, 3, 4, 5, 6]

// =======================
// Método .flatMap()
// =======================
// Aplica una función a cada elemento y aplana el resultado en un solo nivel.
let duplicadoYPlano = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// =======================
// Método .fill()
// =======================
// Llena el arreglo con un valor, desde el índice de inicio hasta el de fin opcional.
let arrayRelleno = new Array(5).fill("x"); // ["x", "x", "x", "x", "x"]
arrayRelleno.fill("y", 1, 3); // ["x", "y", "y", "x", "x"]

// =======================
// Método .copyWithin()
// =======================
// Copia una parte del arreglo dentro del mismo arreglo, con índices de inicio y fin opcionales.
let numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]

// =======================
// Ejemplos de uso de .sort() con función de comparación
// =======================
let letras = ["c", "a", "b"];
letras.sort(); // ["a", "b", "c"]

// Ordenar números en orden ascendente
let numerosDesordenados = [10, 5, 8, 1, 4];
numerosDesordenados.sort((a, b) => a - b); // [1, 4, 5, 8, 10]

// =======================
// Método .reduceRight()
// =======================
// Funciona como .reduce() pero de derecha a izquierda.
let restaReversa = [1, 2, 3, 4].reduceRight((acum, num) => acum - num); // -2

// =======================
// Método .findIndex()
// =======================
// Devuelve el índice del primer elemento que cumpla la función de prueba.
let numerosGrandes = [10, 20, 30];
let indiceMayorA15 = numerosGrandes.findIndex(num => num > 15); // 1

// =======================
// Método .entries()
// =======================
// Devuelve un objeto iterador con pares [índice, valor] para cada elemento.
let iterador = ["x", "y", "z"].entries();
for (let [index, valor] of iterador) {
  console.log(`Índice ${index}: ${valor}`);
}

// =======================
// Ejemplo práctico con .reduce() - Contar ocurrencias
// =======================
let elementos = ["a", "b", "a", "c", "a", "b"];
let conteo = elementos.reduce((acum, val) => {
  acum[val] = (acum[val] || 0) + 1;
  return acum;
}, {});
// conteo = { a: 3, b: 2, c: 1 }

// =======================
// Ejemplo práctico con .map() - Transformación de objetos
// =======================
let estudiantes = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Luis", calificacion: 92 },
  { nombre: "Carlos", calificacion: 88 }
];
let nombresDeEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
// ["Ana", "Luis", "Carlos"]

// =======================
// Ejemplo práctico con .some() - Verificar al menos uno
// =======================
let tieneMenorEdad = estudiantes.some(estudiante => estudiante.calificacion < 90); // true

// =======================
// Ejemplo práctico con .every() - Verificar todos
// =======================
let todosMayorA80 = estudiantes.every(estudiante => estudiante.calificacion > 80); // true

// =======================
// Ejemplo práctico con .reduce() - Obtener promedio
// =======================
let promedio = estudiantes.reduce((acum, estudiante) => acum + estudiante.calificacion, 0) / estudiantes.length; // 88.33

// =======================
// Ejemplo práctico con .slice() y .splice() - Modificar y extraer
// =======================
let frutas = ["manzana", "banana", "mango", "kiwi"];
let tropicales = frutas.slice(1, 3); // ["banana", "mango"]

// Reemplazar "banana" y "mango" con "fresa"
frutas.splice(1, 2, "fresa"); // frutas ahora es ["manzana", "fresa", "kiwi"]

// =======================
// Ejemplo con .reverse() - Palíndromo
// =======================
let palabra = "radar";
let esPalindromo = palabra === palabra.split("").reverse().join(""); // true

// =======================
// Combinando varios métodos
// =======================
// Filtrar estudiantes con calificación mayor a 85, extraer sus nombres, y unir en una cadena
let estudiantesDestacados = estudiantes
  .filter(estudiante => estudiante.calificacion > 85)
  .map(estudiante => estudiante.nombre)
  .join(", ");
// estudiantesDestacados = "Luis, Carlos"

// =======================
// Usar .map() para transformar y .filter() para filtrar
// =======================
// Duplicar números pares y descartarlos si son menores de 10
let numerosPares = [1, 2, 3, 4, 5, 6];
let doblesMayoresADiez = numerosPares
  .map(num => num * 2)
  .filter(num => num >= 10); // [12]

// =======================
// Convertir objetos en arreglo y aplicar métodos
// =======================
let inventario = { manzanas: 5, peras: 10, uvas: 7 };
let totalFrutas = Object.values(inventario).reduce((total, cantidad) => total + cantidad, 0); // 22

// =======================
// .Array.from() con Map para crear arreglos personalizados
// =======================
let cuadradosHasta10 = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// =======================
// .forEach() con índice para realizar acciones
// =======================
let dias = ["Lunes", "Martes", "Miércoles"];
dias.forEach((dia, indice) => console.log(`Día ${indice + 1}: ${dia}`));
