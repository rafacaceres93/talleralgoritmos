
function tipoTriangulo() {
    const lado1 = parseFloat(prompt("Ingrese el primer lado del triangulo: "));
    const lado2 = parseFloat(prompt("Ingrese el segundo lado del triangulo: "));
    const lado3 = parseFloat(prompt("Ingrese el tercer lado del triangulo: "));

    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Es un triangulo equilatero ");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Es un triangulo isosceles ");
    } else {
        console.log("Es un triangulo escaleno ");
    }
    ejercicio3Contador++;
}
