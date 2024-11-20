// =======================
// Variables
// =======================
let cadenaTexto = "cadena de texto"; // Texto
let numeroEntero = 19;                // Número entero
let booleano = false;                  // Valor booleano (verdadero/falso)

// =======================
// Dentro de un bloque
// =======================
{
    let numeroBloque = 15; // Variable declarada dentro de un bloque
}

// =======================
// Variables constantes
// =======================
const nombreConstante = "Dalto"; // Constante, no se puede modificar

// =======================
// Declaración e Inicialización
// =======================
let numero; // Declaración de la variable
numero = 19; // Inicialización de la variable
alert(numero); // Muestra el valor de numero

// =======================
// Múltiples Variables
// =======================
let num1 = 23, num2 = 39, num3 = 49; // Declaración de múltiples variables

// =======================
// Null - Variable vacía
// =======================
let variableNula = null; // Variable que no tiene valor asignado

// =======================
// Operaciones con Variables
// =======================
let nu = 5, np = 6, nc = "pedro";
alert(nu + np + nc); // Suma y concatenación (resultado: "11pedro")
// La siguiente línea lanzará NaN porque nc es una cadena.
alert(nu * np); // Multiplicación (resultado: 30)

// =======================
// Uso de prompt
// =======================
let nombreUsuario = prompt("Dime tu nombre"); // Solicita el nombre al usuario
alert("Hola " + nombreUsuario); // Saludo al usuario

// =======================
// Operadores Aritméticos
// =======================
let resultado; // Variable para almacenar resultados

// Sumar
resultado = 5 + 3; // resultado: 8
// Restar
resultado = 5 - 3; // resultado: 2
// Multiplicar
resultado = 5 * 3; // resultado: 15
// Dividir
resultado = 5 / 3; // resultado: aproximadamente 1.67

// =======================
// Operadores de Asignación
// =======================
let x = 10, y = 5; // Asignamos valores a x e y

// Asignación
x = y; // x toma el valor de y

// Asignación de Adición
x += y; // x = x + y

// Asignación de Sustracción
x -= y; // x = x - y

// Asignación de Multiplicación
x *= y; // x = x * y

// Asignación de División
x /= y; // x = x / y

// Asignación de Resto
x %= y; // x = x % y

// Asignación de Exponenciación
x **= y; // x = x ** y

// Desplazamiento a la Izquierda
x <<= y; // x = x << y

// Desplazamiento a la Derecha
x >>= y; // x = x >> y

// Desplazamiento sin Signo a la Derecha
x >>>= y; // x = x >>> y

// Asignación AND
x &= y; // x = x & y

// Asignación XOR
x ^= y; // x = x ^ y

// Asignación OR
x |= y; // x = x | y

// =======================
// Ejemplo
// =======================
let nuo = 5;
nuo += 5; // Aumenta el valor de nuo en 5
document.write(nuo); // Escribe el resultado en el documento

// =======================
// Concatenación
// =======================
let saludo = "Hola"; // Cadena de saludo
let nombre = "Mundo"; // Cadena con nombre
let mensaje = saludo + " " + nombre; // Concatenación de cadenas
alert(mensaje); // Resultado: "Hola Mundo"

// =======================
// Método concat
// =======================
// Se usa de forma: para unir dos o más cadenas (o una cadena 
// y un número), generando una nueva cadena que es la combinación
// de los valores. Su condición para usarse es: 
// que al menos uno de los operandos debe ser una cadena.
// Si el operando es un número, este se convierte automáticamente
// a cadena antes de concatenar.

let numero1 = "53"; // Cadena que representa un número
let numero2 = 8;    // Número entero

// Usando el método concat
let frase = numero1.concat(numero2); // Resultado: "538"

// =======================
// Template literals
// =======================
// Se usa de forma: para crear cadenas que permiten insertar variables
// y expresiones utilizando la sintaxis `${}` dentro de comillas invertidas (backticks).

let nombrePersona = "Juan"; // Variable con un nombre
let edadPersona = 25;       // Variable con una edad

// Usando template literals para crear una cadena
let saludoTemplate = `Hola, mi nombre es ${nombrePersona} y tengo ${edadPersona} años.`; 
// Resultado: "Hola, mi nombre es Juan y tengo 25 años."

console.log(saludoTemplate); // Imprime: "Hola, mi nombre es Juan y tengo 25 años."

// Otro ejemplo de cadena multilínea
let mensajeMultilinea = `Este es un mensaje
que ocupa varias líneas. 
¡Es fácil de leer!`;

console.log(mensajeMultilinea); // Imprime el mensaje en múltiples líneas.

// =======================
// Operadores de Comparación
// =======================

// Igualdad (no estricta)
// Compara los valores después de convertirlos a un tipo común.
let igualNoEstricta = (5 == '5'); // true

// Igualdad estricta
// Compara valores y tipos, sin conversión de tipos.
let igualEstricta = (5 === '5'); // false

// Desigualdad (no estricta)
// Comprueba si los valores son diferentes, permitiendo conversión de tipos.
let desigualdadNoEstricta = (5 != '5'); // false

// Desigualdad estricta
// Comprueba si los valores y tipos son diferentes.
let desigualdadEstricta = (5 !== '5'); // true

// Mayor que
let mayorQue = (10 > 5); // true

// Menor que
let menorQue = (5 < 10); // true

// Mayor o igual que
let mayorOIgualQue = (10 >= 10); // true

// Menor o igual que
let menorOIgualQue = (5 <= 10); // true


// =======================
// Operadores Lógicos
// =======================

// AND lógico
// Retorna true si ambos operandos son verdaderos.
let andLogico = (true && false); // false

// OR lógico
// Retorna true si al menos uno de los operandos es verdadero.
let orLogico = (true || false); // true

// NOT lógico
// Invierte el valor booleano del operando.
let notLogico = !true; // false


