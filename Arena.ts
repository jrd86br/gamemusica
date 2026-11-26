import { Show } from "./Show.ts";

export class Arena extends Show {
    constructor() {
        super("Arena", 500, 50, 300, 50); // define local, premio base, popularidade minima, skill mínima e custo de energia
    }

    protected calcularGanho(precisao: number): number {
        if (precisao >= 0.8) return this.premioBase;
        if (precisao >= 0.5) return Math.round(this.premioBase * 0.1);
        return 0;
    }   

    protected calcularPopularidade(precisao: number): number {
        if (precisao >= 0.8) return 5;
        if (precisao >= 0.5) return 2;
        return 0;
    }
}