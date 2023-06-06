
// EJERCICIO 1
/*
let numero = parseInt(prompt("Ingrese un número:"));
let i = 1;

while (i <= numero) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
}
*/


// EJERCICIO 2
/*
let numero1 = parseInt(prompt("Ingrese el primer número entre 1 y 50:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50:"));
let i = 1;

while (i <= 50) {
  if (i === numero1 || i === numero2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
  i++;
}
*/



// EJERCICIO 3
/*
let numeros = [];
let numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

while (numero !== 0) {
  numeros.push(numero);
  numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
}

console.log(numeros);
*/


// EJERCICIO 4
/*
let numeros = [];
let numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

while (numero !== 0) {
  numeros.push(numero);
  numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
}

console.log(numeros);
*/

// EJERCICIO 5
/*
let dia = prompt("Ingrese un día de la semana (ingrese 'domingo' para terminar):");

while (dia.toLowerCase() !== "domingo") {
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("Hoy es lunes. ¡Ánimo!");
      break;
    case "martes":
      alert("Hoy es martes. ¡A darle duro!");
      break;
    case "miércoles":
      alert("Hoy es miércoles. ¡Ya estamos a la mitad de la semana!");
      break;
    case "jueves":
      alert("Hoy es jueves. ¡Casi llegamos al fin de semana!");
      break;
    default:
      alert("Día no válido");
      break;
  }
  dia = prompt("Ingrese otro día de la semana (ingrese 'domingo' para terminar):");
}

alert("Ve a descansar");
*/