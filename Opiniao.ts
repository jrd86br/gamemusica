import { Show } from "./Show.ts";

export class Opiniao extends Show {
    constructor() {
        super("Bar Opinião", 385, 35, 200, 40)  // define local, premio base, popularidade minima, skill mínima e custo de energia
    }

    protected calcularGanho(precisao: number): number {
        if (precisao >= 0.8) return this.premioBase;
        if (precisao >= 0.5) return Math.round(this.premioBase * 0.2);
        return 0;
    }   

    protected calcularPopularidade(precisao: number): number {
        if (precisao >= 0.8) return 5;
        if (precisao >= 0.5) return 2;
        return 0;
    }
    descricao(): string {
    return "Palco tradicional da cena. Exige muita skill e um show médio paga só 20%.";
}
}