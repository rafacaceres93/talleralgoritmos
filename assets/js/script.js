


function calcularCompra() {
    let valor = parseFloat(prompt("Ingrese el valor de compra: "));
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
    let totalCompra = (valor * cantidad) ;
    let descuento = totalCompra * 0.10;
    let iva = totalCompra * 0.19;
    let totalNeto = totalCompra + iva;
    if (totalCompra > 1000000) {

        totalNeto = totalCompra - (iva + descuento);
      
    } else if (totalCompra > 500000) {
        totalNeto = totalCompra - iva;

    }
    console.log("El valor de la compra es: " + totalCompra);
    console.log("El valor a pagar es: " + totalNeto);
    console.log("El valor de el IVA es: " + iva);
    ejercicio5Contador++;
}
