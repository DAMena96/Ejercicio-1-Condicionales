var cuentas = [
    { nombre: "Andres", saldo: 200 },
    { nombre: "Alejandra", saldo: 290 },
    { nombre: "Samuel", saldo: 67 }
  ];
  var selectedAccountIndex = -1;
  
  function seleccionarCuenta(index) {
    selectedAccountIndex = index;
    document.getElementById("nombreCuenta").textContent = cuentas[index].nombre;
    document.getElementById("menu").style.display = "none";
    document.getElementById("operaciones").style.display = "block";
  }
  
  function verificarPassword() {
    var password = document.getElementById("password").value;
    if (password === "dev") {
      document.getElementById("operaciones").style.display = "none";
      document.getElementById("acciones").style.display = "block";
    } else {
      alert("Password incorrecto. Intenta nuevamente.");
    }
  }
  
  function consultarSaldo() {
    document.getElementById("acciones").style.display = "none";
    document.getElementById("saldo").style.display = "block";
    document.getElementById("saldoActual").textContent = "Saldo actual: $" + cuentas[selectedAccountIndex].saldo;
  }
  
  function ingresarMonto() {
    var monto = parseFloat(prompt("Ingrese el monto a ingresar:"));
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto válido.");
    } else {
      var nuevoSaldo = cuentas[selectedAccountIndex].saldo + monto;
      if (nuevoSaldo <= 990) {
        cuentas[selectedAccountIndex].saldo = nuevoSaldo;
        alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo);
      } else {
        alert("No se puede ingresar el monto. La cuenta no puede tener más de $990.");
      }
    }
    document.getElementById("acciones").style.display = "none";
    document.getElementById("operaciones").style.display = "block";
  }
  
  function retirarMonto() {
    var monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto válido.");
    } else {
      var nuevoSaldo = cuentas[selectedAccountIndex].saldo - monto;
      if (nuevoSaldo >= 10) {
        cuentas[selectedAccountIndex].saldo = nuevoSaldo;
        alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo);
      } else {
        alert("No se puede retirar el monto. La cuenta no puede tener menos de $10.");
      }
    }
    document.getElementById("acciones").style.display = "none";
    document.getElementById("operaciones").style.display = "block";
  }
  