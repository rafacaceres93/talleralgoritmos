

function numerosAmigos() {
    let numero1 = parseInt(prompt("Ingrese el primer numero:"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero:"));

    function obtenerSumaDivisores(numero) {
        let suma = 0;
        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                suma += i;
            }
        }
        return suma;
    }

    const sumaDivisores1 = obtenerSumaDivisores(numero1);
    const sumaDivisores2 = obtenerSumaDivisores(numero2);

    if (sumaDivisores1 === numero2 && sumaDivisores2 === numero1) {
        console.log("Los numeros " + numero1 + " y " + numero2 + " son amigos");
    } else {
        console.log("Los numeros " + numero1 + " y " + numero2 + " no son amigos");
    }
    ejercicio4Contador++;
}
