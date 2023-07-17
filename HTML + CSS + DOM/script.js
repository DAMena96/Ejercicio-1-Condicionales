// Declaración de un array de productos con nombre y precio
let productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
  ];
  
  // Declaración de un array de ventas
  let ventas = [];
  
  // Función para agregar una venta
  function agregarVenta() {
    // Obtener los valores del vendedor, producto y cantidad desde los elementos del formulario
    let vendedor = document.getElementById("vendedor").value;
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
  
    // Validar si la cantidad ingresada no es un número o está vacía
    if (isNaN(cantidad) || cantidad.trim() === "") {
      // Mostrar una alerta indicando que se debe ingresar una cantidad numérica
      alert("Por favor, ingrese una cantidad numérica.");
      return;
    }
  
    // Convertir la cantidad a un número entero
    cantidad = parseInt(cantidad);
  
    // Buscar si ya existe una venta para el mismo vendedor y producto
    let ventaExistente = ventas.find(function (venta) {
      return venta.vendedor === vendedor && venta.producto === producto;
    });
  
    // Si la venta ya existe, se incrementa la cantidad
    if (ventaExistente) {
      ventaExistente.cantidad += cantidad;
    } else {
      // Si la venta no existe, se agrega una nueva venta al array de ventas
      ventas.push({ vendedor: vendedor, producto: producto, cantidad: cantidad });
    }
  
    // Mostrar una alerta indicando que la venta se agregó exitosamente
    alert("Venta agregada exitosamente.");
  }
  
  // Función para calcular las ventas totales y el empleado del mes
  function calcularVentas() {
    // Verificar si no se han registrado ventas
    if (ventas.length === 0) {
      // Mostrar una alerta indicando que no se han registrado ventas
      alert("No se han registrado ventas.");
      return;
    }
  
    // Objeto para almacenar las ventas por vendedor
    let ventasPorVendedor = {};
  
    // Calcular las ventas por vendedor y por producto
    ventas.forEach(function (venta) {
      // Verificar si el vendedor ya tiene ventas registradas
      if (!ventasPorVendedor[venta.vendedor]) {
        ventasPorVendedor[venta.vendedor] = {};
      }
  
      // Verificar si el producto ya tiene ventas registradas para el vendedor
      if (!ventasPorVendedor[venta.vendedor][venta.producto]) {
        ventasPorVendedor[venta.vendedor][venta.producto] = 0;
      }
  
      // Incrementar la cantidad de ventas del producto para el vendedor
      ventasPorVendedor[venta.vendedor][venta.producto] += venta.cantidad;
    });
  
    // Calcular la suma total de dinero recolectada por cada vendedor
    let sumaTotalPorVendedor = {};
    for (let vendedor in ventasPorVendedor) {
      sumaTotalPorVendedor[vendedor] = 0;
      for (let producto in ventasPorVendedor[vendedor]) {
        let cantidad = ventasPorVendedor[vendedor][producto];
        let precio = productos.find(function (prod) {
          return prod.nombre === producto;
        }).precio;
        sumaTotalPorVendedor[vendedor] += cantidad * precio;
      }
    }
  
    // Encontrar al empleado del mes
    let vendedorMes = "";
    let maxVentas = 0;
    let empate = false;
  
    for (let vendedor in sumaTotalPorVendedor) {
      let totalVentas = sumaTotalPorVendedor[vendedor];
      if (totalVentas > maxVentas) {
        maxVentas = totalVentas;
        vendedorMes = vendedor;
        empate = false;
      } else if (totalVentas === maxVentas) {
        empate = true;
      }
    }
  
    // Generar el mensaje con la cantidad de cada producto vendido por cada vendedor
    let mensajeCantidadProductos = "Cantidad de productos vendidos por cada vendedor:\n";
    for (let vendedor in ventasPorVendedor) {
      mensajeCantidadProductos += "- " + vendedor + ":\n";
      for (let producto in ventasPorVendedor[vendedor]) {
        let cantidad = ventasPorVendedor[vendedor][producto];
        mensajeCantidadProductos += "  - " + producto + ": " + cantidad + "\n";
      }
    }
  
    // Generar el mensaje con la suma total de dinero recolectada por cada vendedor
    let mensajeSumaTotal = "Suma total de dinero recolectada por cada vendedor:\n";
    for (let vendedor in sumaTotalPorVendedor) {
      mensajeSumaTotal += "- " + vendedor + ": " + sumaTotalPorVendedor[vendedor] + " USD\n";
    }
  
    // Generar el mensaje con el nombre del empleado del mes o indicar un empate
    let mensajeEmpleadoMes = "Empleado del mes: ";
    if (empate) {
      mensajeEmpleadoMes += "Empate";
    } else {
      mensajeEmpleadoMes += vendedorMes;
    }
  
    // Mostrar una alerta con los resultados
    alert(
      mensajeCantidadProductos +
      "\n" +
      mensajeSumaTotal +
      "\n" +
      mensajeEmpleadoMes
    );
  }
  
  // Agregar un evento de click al botón "Agregar Venta" que llame a la función agregarVenta
  document.getElementById("agregarVentaBtn").addEventListener("click", agregarVenta);
  
  // Agregar un evento de click al botón "Calcular Ventas" que llame a la función calcularVentas
  document.getElementById("calcularVentasBtn").addEventListener("click", calcularVentas);
  