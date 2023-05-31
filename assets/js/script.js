



function notaEstudiante() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));
    let nota4 = parseFloat(prompt("Ingrese la cuarta nota: "));

    if (nota4 === 5) {
        nota1++;
        nota2++;
        nota3++;
    }

    const notaFinal = (nota1 * 0.1) + (nota2 * 0.2) + (nota3 * 0.3) + (nota4 * 0.4);

    if (notaFinal > 3.5) {
        console.log("El estudiante ganó. ");
    } else {
        console.log("El estudiante perdió. ");
    }
    ejercicio6Contador++;
}
function ejerciciomasejecutado() {

    let menor = ejercicio1Contador;
    let mayor = ejercicio1Contador;

    if (ejercicio2Contador < menor) {
        menor = ejercicio2Contador;
    }

    if (ejercicio2Contador > mayor) {
        mayor = ejercicio2Contador;
    }

    if (ejercicio3Contador < menor) {
        menor = ejercicio3Contador;
    }

    if (ejercicio3Contador > mayor) {
        mayor = ejercicio3Contador;
    }
    if (ejercicio4Contador < menor) {
        menor = ejercicio4Contador;
    }

    if (ejercicio4Contador > mayor) {
        mayor = ejercicio4Contador;
    }

    if (ejercicio5Contador < menor) {
        menor = ejercicio5Contador;
    }

    if (ejercicio5Contador > mayor) {
        mayor = ejercicio5Contador;
    }
    if (ejercicio6Contador < menor) {
        menor = ejercicio6Contador;
    }

    if (ejercicio6Contador > mayor) {
        mayor = ejercicio6Contador;
    }


    console.log("El ejercicio menos ejecutado fue: ", menor);
    console.log("El ejercicio mas ejecutado fue: ", mayor);
}


function ejecutarPrograma() {
    let condition = true
    while (condition) {
        let opcion = parseInt(prompt("Elija la operacion que desea realizar :\n1- Ordenar numeros\n2- Area Circunferencia \n3- Tipo de triangulo\n4- Numeros amigos \n5- Valor de compra \n6- Nota de estudiante\n7- Salir"))

        switch (opcion) {
            case 1:
                ordenarNumeros();
                break;
            case 2:
                areaCirculo();
                break;
            case 3:
                tipoTriangulo();
                break;
            case 4:
                numerosAmigos();
                break;
            case 5:
                calcularCompra();
                break;
            case 6:
                notaEstudiante();
                break;
            case 7:
                condition = false;
                break;
            default:
                alert("La Opción es inválida.");
                break;
        }
    }

    console.log("Ejercicio 1 se ejecutó " + ejercicio1Contador + " veces");
    console.log("Ejercicio 2 se ejecutó " + ejercicio2Contador + " veces");
    console.log("Ejercicio 3 se ejecutó " + ejercicio3Contador + " veces");
    console.log("Ejercicio 4 se ejecutó " + ejercicio4Contador + " veces");
    console.log("Ejercicio 5 se ejecutó " + ejercicio5Contador + " veces");
    console.log("Ejercicio 7 se ejecutó " + ejercicio6Contador + " veces");
    console.log(ejerciciomasejecutado());


}
ejecutarPrograma()
