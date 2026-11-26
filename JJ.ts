import { Show } from "./Show.ts";

export class JJ extends Show {
    constructor() {
        super("Johnnie Jack", 250, 20, 100, 30); // define local, premio base, popularidade minima, skill mínima e custo de energia
    }

    protected calcularGanho(precisao: number): number {
        if (precisao >= 0.8) return this.premioBase;
        if (precisao >= 0.5) return Math.round(this.premioBase * 0.3);
        return 0;
    }

    protected calcularPopularidade(precisao: number): number {
        if (precisao >= 0.8) return 5;
        if (precisao >= 0.5) return 2;
        return 0;
    }
}