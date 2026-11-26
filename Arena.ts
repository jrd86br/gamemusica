import { Show } from "./Show.ts";

export class Arena extends Show {
    constructor() {
        super("Arena", 500, 50, 300, 50); // define local, premio base, popularidade minima, skill mínima e custo de energia
    }

    protected calcularGanho(precisao: number): number {
        if (precisao >= 0.8) return this.premioBase;
        
        return 0;
    }   

    protected calcularPopularidade(precisao: number): number {
        if (precisao >= 0.8) return 5;
        
        return 0;
    }
    descricao(): string {
    return "O palco dos grandes. Tudo ou nada: só paga se o show for excelente.";
}
}