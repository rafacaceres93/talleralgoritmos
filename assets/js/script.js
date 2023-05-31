function areaCirculo() {
    const pi = 3.1416
    const radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
    const area = pi * (radio * radio);
    console.log("El área de la circunferencia es: " + area + "cm²");
    ejercicio2Contador++;
}