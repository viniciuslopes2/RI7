export default class Bhaskara {
    calcularRaiz(a, b, c) {
        const delta = (b * b) - (4 * a * c);
        if (delta < 0)
            return "Não há raiz real";
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `x1 = ${x1}, x2 = ${x2}`;
    }
}
