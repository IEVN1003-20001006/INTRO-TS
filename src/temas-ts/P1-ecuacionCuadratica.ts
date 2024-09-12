class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public resolver(): void {
        const discriminante = (this.b ** 2) - (4 * this.a * this.c);

        if (discriminante < 0) {
            console.log("No hay solucion.");
        } else {
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
        }
    }
}


const ecuacion = new EcuacionCuadratica(1,-3,2);
ecuacion.resolver();



