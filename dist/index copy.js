import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Soma, Subtracao, Multiplicacao, Divisao, Potencia, Radiciacao } from "./operadoresCalculadora.js";
import Bhaskara from './bhaskara.js';
const ler = readline.createInterface({ input, output });
console.log(`\n===== Calculadora =====`);
while (true) {
    console.log(`\nOperadores: Somar, Subtrair, Multiplicar, Dividir, Potência, Raiz ou Bhaskara`);
    console.log(`\nPara sair do programa, digite: Sair`);
    const operador = await ler.question(`Escolha uma das opções acima: `);
    if (operador.toLocaleLowerCase() === 'sair') {
        console.log("Encerrando programa...");
        break;
    }
    if (operador.toLocaleLowerCase() === 'bhaskara') {
        const a = Number(await ler.question(`Insira o valor do A: `));
        const b = Number(await ler.question(`Insira o valor do B: `));
        const c = Number(await ler.question(`Insira o valor do C: `));
        const bhask = new Bhaskara();
        console.log(`\n Resultado da operação por Bhaskara: ${bhask.calcularRaiz(a, b, c)}`);
    }
    else {
        let calculo;
        switch (operador.toLocaleLowerCase()) {
            case 'somar':
                calculo = new Soma();
                break;
            case 'subtrair':
                calculo = new Subtracao();
                break;
            case 'multiplicar':
                calculo = new Multiplicacao();
                break;
            case 'dividir':
                console.log(`\nO primeiro número é o dividendo e o segundo número é o divisor.`);
                calculo = new Divisao();
                break;
            case 'potencia':
                console.log(`\nO primeiro número é a base e o segundo número é o expoente.`);
                calculo = new Potencia();
                break;
            case 'raiz':
                console.log(`\nO primeiro número é o radicando e o segundo número é a raiz.`);
                calculo = new Radiciacao();
                break;
            default: console.log(`\nOperador inválido, você digitou isso corretamente?`);
        }
        const n1 = Number(await ler.question(`Insira o primeiro número: `));
        const n2 = Number(await ler.question(`Insira o segundo número: `));
        if (calculo) {
            console.log(`\nResultado da ${operador}: ${calculo.calcular(n1, n2)}`);
        }
    }
    console.log(`\n==================================`);
}
ler.close();
