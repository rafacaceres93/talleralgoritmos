let ejercicio1Contador = 0;
let ejercicio2Contador = 0;
let ejercicio3Contador = 0;
let ejercicio4Contador = 0;
let ejercicio5Contador = 0;
let ejercicio6Contador = 0;


function Descendente() {
    let num1 = parseInt(prompt("Ingrese un número:"));
    let num2 = parseInt(prompt("Ingrese un número:"));
    let num3 = parseInt(prompt("Ingrese un número:"));
    if (num1 <= num2 && num1 <= num3) {
        if (num2 <= num3) {
            console.log(num1, num2, num3);
        } else {
            console.log("Ordenados de menor a mayor:", num1, num3, num2);
        }
    } else if (num2 <= num1 && num2 <= num3) {
        if (num1 <= num3) {
            console.log("Ordenados de menor a mayor:", num2, num1, num3);
        } else {
            console.log("Ordenados de menor a mayor:", num2, num3, num1);
        }
    } else if (num3 <= num1 && num3 <= num2) {
        if (num1 <= num2) {
            console.log("Ordenados de menor a mayor:", num3, num1, num2);
        } else {
            console.log("Ordenados de menor a mayor:", num3, num2, num1);
        }
    }
}


function Ascendente() {
    let num1 = parseInt(prompt("Ingrese un número:"));
    let num2 = parseInt(prompt("Ingrese un número:"));
    let num3 = parseInt(prompt("Ingrese un número:"));

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            console.log("Ordenados de mayor a menor:", num1, num2, num3);
        } else {
            console.log("Ordenados de mayor a menor:", num1, num3, num2);
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            console.log("Ordenados de mayor a menor:", num2, num1, num3);
        } else {
            console.log("Ordenados de mayor a menor:", num2, num3, num1);
        }
    } else if (num3 >= num1 && num3 >= num2) {
        if (num1 >= num2) {
            console.log("Ordenados de mayor a menor:", num3, num1, num2);
        } else {
            console.log("Ordenados de mayor a menor:", num3, num2, num1);
        }
    }

}

function ordenarNumeros() {

    console.log(Ascendente(), Descendente());
    ejercicio1Contador++;

}