export class Soma {
    calcular(n1, n2) {
        return n1 + n2;
    }
}
export class Subtracao {
    calcular(n1, n2) {
        return n1 - n2;
    }
}
export class Multiplicacao {
    calcular(n1, n2) {
        return n1 * n2;
    }
}
export class Divisao {
    calcular(n1, n2) {
        if (n2 === 0)
            throw new Error("Você quer mesmo dividir por zero? Põe outro número aí");
        return n1 / n2;
    }
}
export class Potencia {
    calcular(n1, n2) {
        return Math.pow(n1, n2);
    }
}
export class Radiciacao {
    calcular(n1, n2) {
        return Math.pow(n1, 1 / n2);
    }
}
