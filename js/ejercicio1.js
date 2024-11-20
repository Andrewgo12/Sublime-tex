

//======================
// ejercicio condicionales 
//=======================


// A) 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado pero hay un problema: 
// los precios no están al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado más caro 
// que puedan con la plata que tienen, así que... veamos cómo podemos ayudarlos.

// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD

// Los precios de helados son los siguientes:
// - Palito de helado de agua: $0.6 USD
// - Palito de helado de crema: $1 USD
// - Bombón helado marca heladix: $1.6 USD
// - Bombón helado marca heladovich: $1.7 USD
// - Bombón helado marca helardo: $1.8 USD
// - Potecito de helado con confites: $2.9 USD
// - Pote de 1/4 KG -> $2.9 USD

// CREAR SOLUCIONES:
// 1. Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que pueden comprar.
// 2. Si hay 2 o más con el mismo precio, mostrar ambos.
// 3. Cofla quiere saber cuánto es el vuelto.

// Lista de helados con sus precios
function comprarHelado(nombre, dinero) {
    if (dinero >= 0.6 && dinero < 1) {
        alert(`${nombre}, puedes comprar el helado de agua ($0.6 USD).`);
    } else if (dinero >= 1 && dinero < 1.6) {
        alert(`${nombre}, puedes comprar el helado de crema ($1 USD).`);
    } else if (dinero >= 1.6 && dinero < 1.7) {
        alert(`${nombre}, puedes comprar el bombón helado marca Heladix ($1.6 USD).`);
    } else if (dinero >= 1.7 && dinero < 1.8) {
        alert(`${nombre}, puedes comprar el bombón helado marca Heladovich ($1.7 USD).`);
    } else if (dinero >= 1.8 && dinero < 2.9) {
        alert(`${nombre}, puedes comprar el bombón helado marca Helardo ($1.8 USD).`);
    } else if (dinero >= 2.9) {
        alert(`${nombre}, puedes comprar el potecito de helado con confites o el pote de 1/4 KG ($2.9 USD).`);
    } else {
        alert(`${nombre}, no tienes suficiente dinero para comprar ningún helado.`);
    }
}

// Pedimos el dinero para cada persona
let DineroCofla = parseFloat(prompt("¿Cuánto dinero tienes, Cofla?"));
let DineroRoberto = parseFloat(prompt("¿Cuánto dinero tienes, Roberto?"));
let DineroPedro = parseFloat(prompt("¿Cuánto dinero tienes, Pedro?"));

// Llamamos a la función para cada persona
comprarHelado("Cofla", DineroCofla);
comprarHelado("Roberto", DineroRoberto);
comprarHelado("Pedro", DineroPedro);
