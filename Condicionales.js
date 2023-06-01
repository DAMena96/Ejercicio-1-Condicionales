

// EJERCICIO 1
/*
let respuesta = prompt("¿Eres bellísimo/a? (si/no)");

if (respuesta === "si") {
  console.log("Ciertamente");
} 
else {
  console.log("No te creo");
}
*/


// EJERCICIO 2
/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero % 2 === 0) {
  console.log(numero + " es divisible entre 2");
} else {
  console.log(numero + " no es divisible entre 2");
}
*/

// EJERCICIO 3
/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero % 2 === 0) {
  console.log(numero + " es un numero par");
} else {
  console.log(numero + " no es un número par");
}
*/

// EJERCICIO 4
/*
let respuesta = prompt("Ingrese un número");
if (respuesta === "1000") {
  console.log("Ganaste un premio");
} else {
  console.log(respuesta + " Lo sentimos, sigue participando");
}
*/

// EJERCICIO 5
/*
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else if (numero2 < numero1) {
  console.log(numero2 + " es menor que " + numero1);
} else {
  console.log("Los números son iguales");
}
*/

// EJERCICIO 6
/*
let numero1 = parseInt(prompt("Ingrese el Primer numero"));
let numero2 = parseInt(prompt("Ingrese el Segundo numero"));
let numero3 = parseInt(prompt("Ingrese el Tercer numero"));

if (numero1 < numero2 && numero1 < numero3) {
  console.log("El primer número es el menor: " + numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
  console.log("El segundo número es el menor: " + numero2);
} else if (numero3 < numero1 && numero3 < numero2) {
  console.log("El tercer número es el menor: " + numero3);
} else {
  console.log("Hay números iguales o no se pudo determinar el menor.");
}
*/

// EJERCICIO 7
/*
let diaSemana = prompt("Ingrese un día de la semana");

if (diaSemana.toLowerCase() === "lunes") {
  console.log("Es lunes. ¡Ánimo para el inicio de la semana!");
} else if (diaSemana.toLowerCase() === "viernes") {
  console.log("Es viernes. ¡Feliz viernes!");
} else if (diaSemana.toLowerCase() === "sábado" && diaSemana.toLowerCase() === "domingo") {
  console.log("Es fin de semana.");
} else {
  console.log("El día ingresado no es válido.");
}
*/

// EJERCICIO 8
/*
let calificacion = parseInt(prompt("Ingrese una calificación (entre 1 y 10):"));

if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else {
    console.log("Excelente");
  }
} else {
  console.log("Error: La calificación debe estar entre 1 y 10.");
}
*/

// EJERCICIO 9
/*
let topping = prompt("Ingrese topping que le gustaría en su helado");
let helado = 50;

if (topping.toLowerCase() === "oreo") {
  helado += 10;
} else if (topping.toLowerCase() === "kitkat") {
  helado += 15;
} else if (topping.toLowerCase() === "brownie") {
  helado += 20;
} else {
  console.log("No tenemos este topping.");
}

console.log("El precio total de su helado es de " + helado + " MXN.");
*/

// EJERCICIO 10
/*
let opcion = prompt("Bienvenido/a al portal de educación en tecnología. Por favor, elija el nivel de programa que le interesa:\n1. Course\n2. Carrera\n3. Master");

let costoMensual;
let duracion;
let descuento = 0;

if (opcion === "1") {
  costoMensual = 4999;
  duracion = 2;
} else if (opcion === "2") {
  costoMensual = 3999;
  duracion = 6;
} else if (opcion === "3") {
  costoMensual = 2999;
  duracion = 12;
} else {
  console.log("Opción no válida.");
  return;
}

let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");

if (beca.toLowerCase() === "facebook") {
  descuento = 0.2;
} else if (beca.toLowerCase() === "google") {
  descuento = 0.15;
} else if (beca.toLowerCase() === "jesua") {
  descuento = 0.5;
}

let precioFinal = costoMensual - (costoMensual * descuento);
let total = precioFinal * duracion;

console.log("El precio mensual con descuento es de " + precioFinal + " MXN.");
console.log("El gasto total por el programa elegido es de " + total + " MXN.");
*/

// EJERCICIO 11
/*
let opcion = prompt("Bienvenido/a al portal de educación en tecnología. Por favor, elija el nivel de programa que le interesa:\n1. Course\n2. Carrera\n3. Master");

let costoMensual;
let duracion;
let descuento = 0;

if (opcion === "1") {
  costoMensual = 4999;
  duracion = 2;
} else if (opcion === "2") {
  costoMensual = 3999;
  duracion = 6;
} else if (opcion === "3") {
  costoMensual = 2999;
  duracion = 12;
} else {
  console.log("Opción no válida.");
  return;
}

let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");

if (beca.toLowerCase() === "facebook") {
  descuento = 0.2;
} else if (beca.toLowerCase() === "google") {
  descuento = 0.15;
} else if (beca.toLowerCase() === "jesua") {
  descuento = 0.5;
}

let precioFinal = costoMensual - (costoMensual * descuento);
let total = precioFinal * duracion;

console.log("El precio mensual con descuento es de " + precioFinal + " MXN.");
console.log("El gasto total por el programa elegido es de " + total + " MXN.");
*/

// EJERCICIO 12
/*
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
let precioKilometro;
let litrosConsumidos;
let costoTotal;

if (tipoVehiculo.toLowerCase() === "coche") {
  precioKilometro = 0.20;
} else if (tipoVehiculo.toLowerCase() === "moto") {
  precioKilometro = 0.10;
} else if (tipoVehiculo.toLowerCase() === "autobús") {
  precioKilometro = 0.5;
} else {
  console.log("Tipo de vehículo no válido.");
  return;
}

let kmsRecorridos = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));

litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
  costoTotal = (precioKilometro * kmsRecorridos) + 5;
} else if (litrosConsumidos > 100) {
  costoTotal = (precioKilometro * kmsRecorridos) + 10;
} else {
  console.log("Cantidad de litros consumidos no válida.");
  return;
}

console.log("El total a pagar es: " + costoTotal);
*/