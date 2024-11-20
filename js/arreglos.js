// =======================
// Arreglos (Arrays)
// =======================

// Un arreglo es una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Los arreglos pueden contener elementos de cualquier tipo, incluidos números, cadenas, objetos, e incluso otros arreglos.
// Los arreglos en JavaScript son dinámicos, lo que significa que su tamaño puede cambiar durante la ejecución del programa.

// Creación de un arreglo
let miArreglo = [1, 2, 3, 4, 5]; // Arreglo de números

// =======================
// Tipos de Arreglos
// =======================

// Arreglos homogéneos: Todos los elementos son del mismo tipo.
let arregloHomogeneo = [1, 2, 3, 4, 5]; // Solo números

// Arreglos heterogéneos: Los elementos pueden ser de diferentes tipos.
let arregloHeterogeneo = [1, "texto", true, null, {nombre: "Juan"}]; // Mezcla de tipos

// Arreglos multidimensionales: Arreglos que contienen otros arreglos.
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // Matriz de 3x3

// =======================
// Arreglos Asociativos
// =======================

// En JavaScript, los arreglos no son realmente asociativos, pero puedes usar objetos para almacenar pares clave-valor.
// Los objetos permiten crear estructuras similares a arreglos asociativos.
let miArregloAsociativo = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Cali"
};

// Acceso a elementos de un arreglo asociativo
let nombre = miArregloAsociativo["nombre"]; // "Juan"
let edad = miArregloAsociativo["edad"]; // 30

// También puedes acceder a los elementos utilizando la notación de punto.
let ciudad = miArregloAsociativo.ciudad; // "Cali"

// =======================
// Métodos de Arreglos
// =======================

// Los métodos de los arreglos permiten manipular y trabajar con los datos dentro de ellos.
// A continuación, se presentan algunos de los métodos más comunes con ejemplos.

// Método .map()
// Crea un nuevo arreglo con los resultados de la llamada a una función proporcionada en cada elemento del arreglo original.
let cuadrados = miArreglo.map(function(num) {
    return num * num; // Devuelve el cuadrado de cada número
}); // cuadrados ahora es [1, 4, 9, 16, 25]

// =======================

// Método .filter()
// Crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función proporcionada.
let mayoresQueDos = miArreglo.filter(function(num) {
    return num > 2; // Devuelve solo los números mayores a 2
}); // mayoresQueDos ahora es [3, 4, 5]

// =======================

// Método .reduce()
// Aplica una función contra un acumulador y cada elemento del arreglo (de izquierda a derecha) para reducirlo a un único valor.
let sumaTotal = miArreglo.reduce(function(acumulador, num) {
    return acumulador + num; // Suma cada elemento al acumulador
}, 0); // sumaTotal es 15

// =======================

// Método .forEach()
// Ejecuta una función proporcionada una vez por cada elemento del arreglo, sin crear un nuevo arreglo.
miArreglo.forEach(function(num) {
    console.log(num); // Imprime cada elemento del arreglo
});

// =======================

// Método .find()
// Devuelve el valor del primer elemento del arreglo que cumple con la función de prueba proporcionada. Si ningún valor cumple la prueba, devuelve undefined.
let primerMayorQueTres = miArreglo.find(function(num) {
    return num > 3; // Devuelve el primer número mayor que 3
}); // primerMayorQueTres es 4

// =======================

// Método .includes()
// Determina si un arreglo incluye un determinado elemento, devuelve true o false según corresponda.
let contieneTres = miArreglo.includes(3); // true, porque 3 está en el arreglo

// =======================

// Método .indexOf()
// Devuelve el primer índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si no está presente.
let indiceDeTres = miArreglo.indexOf(3); // 2, porque 3 está en la posición 2

// =======================

// Método .slice()
// Devuelve una copia superficial de una porción del arreglo en un nuevo objeto arreglo seleccionado desde inicio hasta fin (fin no incluido).
let parteDelArreglo = miArreglo.slice(1, 4); // [2, 3, 4]

// =======================

// Método .splice()
// Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos en su lugar.
// Recibe el índice de inicio, el número de elementos a eliminar y los elementos a añadir.
miArreglo.splice(2, 1, 10); // Elimina 1 elemento en la posición 2 y añade el número 10.
// miArreglo ahora es [1, 2, 10, 4, 5]

// =======================

// Método .join()
// Une todos los elementos de un arreglo en una cadena, separados por el separador especificado.
let arregloComoString = miArreglo.join(", "); // "1, 2, 10, 4, 5"

// =======================

// Método .sort()
// Ordena los elementos de un arreglo localmente y devuelve el arreglo. Por defecto, los elementos son ordenados como cadenas.
let arregloOrdenado = miArreglo.sort(); // [1, 10, 2, 4, 5] (orden lexicográfico)

// =======================

// Método .reverse()
// Invierte el orden de los elementos de un arreglo.
miArreglo.reverse(); // [5, 4, 10, 2, 1]

// =======================

// Ejemplo práctico de uso de arreglos
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 35 }
];

// Filtrar personas mayores de 30 años
let mayoresDe30 = personas.filter(function(persona) {
    return persona.edad > 30;
}); // [{ nombre: "Pedro", edad: 35 }]

// Obtener los nombres de las personas
let nombres = personas.map(function(persona) {
    return persona.nombre;
}); // ["Juan", "Ana", "Pedro"]

// =======================
// Bucles e Iteraciones
// =======================

// Para recorrer un arreglo, puedes usar varios tipos de bucles:

// Bucle for
for (let i = 0; i < miArreglo.length; i++) {
    console.log(miArreglo[i]); // Imprime cada elemento del arreglo
}

// Bucle for...of
// Permite recorrer los elementos de un arreglo de forma más sencilla.
for (let numero of miArreglo) {
    console.log(numero); // Imprime cada elemento del arreglo
}

// Bucle for...in
// Se utiliza principalmente para objetos, pero se puede usar con arreglos para obtener los índices.
for (let indice in miArreglo) {
    console.log(`Índice ${indice}: ${miArreglo[indice]}`); // Imprime el índice y el elemento correspondiente
}

// =======================
// Ejemplo práctico con bucles
// Calcular la suma de los elementos del arreglo
let suma = 0;
for (let i = 0; i < miArreglo.length; i++) {
    suma += miArreglo[i]; // Suma cada elemento al total
}
console.log(`La suma total es: ${suma}`); // La suma total es: 15

// =======================
// Otros Métodos Útiles
// =======================

// Método .every()
// Verifica si todos los elementos del arreglo cumplen con la condición especificada.
let todosSonMayoresQueCero = miArreglo.every(function(num) {
    return num > 0; // Verifica que todos los números sean mayores que 0
}); // true

// Método .some()
// Verifica si al menos un elemento del arreglo cumple con la condición especificada.
let hayNumeroMayorQueTres = miArreglo.some(function(num) {
    return num > 3; // Verifica si hay algún número mayor que 3
}); // true

// Método .fill()
// Llena todos los elementos de un arreglo con un valor estático, desde un índice inicial hasta un índice final opcional.
let arregloLleno = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// =======================
// Ejercicio de práctica
// =======================

// Crear un arreglo con los números del 1 al 10 y luego calcular su suma total.
let numerosDel1Al10 = Array.from({length: 10}, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sumaDel1Al10 = numerosDel1Al10.reduce((acum, num) => acum + num, 0); // 55

console.log(numerosDel1Al10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`La suma del 1 al 10 es: ${sumaDel1Al10}`); // La suma del 1 al 10 es: 55
