import interfaceCalcular from "./interfaceCalcular.js";

export class Soma implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        return n1 + n2;
    }
}

export class Subtracao implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        return n1 - n2;
    }
}

export class Multiplicacao implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        return n1 * n2;
    }
}

export class Divisao implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        if (n2 === 0) throw new Error("Você quer mesmo dividir por zero? Põe outro número aí");
        return n1 / n2;
    }
}

export class Potencia implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        return Math.pow(n1, n2);
    }
}

export class Radiciacao implements interfaceCalcular{
    public calcular(n1: number, n2: number): number {
        return Math.pow(n1, 1/n2)
    }
}