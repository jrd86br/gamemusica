import { Show } from "./Show.ts";

export class Bar extends Show {
    constructor() {
        super("Bar do Zé", 100, 0, 0, 20);
    }

    protected calcularGanho(precisao: number): number {
        if (precisao >= 0.8) return this.premioBase;
        if (precisao >= 0.5) return Math.round(this.premioBase * 0.4);
        return 0;
    }

    protected calcularPopularidade(precisao: number): number {
        if (precisao >= 0.8) return 3;
        if (precisao >= 0.5) return 1;
        return 0;
    }
    
    descricao(): string {
    return "Palco simples e plateia animada. Acertos parciais ainda rendem dinheiro.";
}
}