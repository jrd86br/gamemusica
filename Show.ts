import { Personagem } from "./Personagem.ts";
import { Mania } from "./Mania.ts";

export class Show {
    local: string;
    private premioBase: number;
    private custoEnergia: number;

    constructor(local: string, premioBase: number = 100) {
        this.local = local;
        this.premioBase = premioBase;
        this.custoEnergia = 20;
    }

    podeTocar(p: Personagem): boolean {
        return p.energia >= this.custoEnergia;
    }

    tocar(p: Personagem, teclado: (msg: string) => string): number {
        p.energia = Math.max(0, p.energia - this.custoEnergia);

        // o resultado vem do desempenho no minigame
        const mania = new Mania(teclado);
        const precisao = mania.jogar(p.skill);

        let ganho = 0;
        if (precisao >= 0.8) ganho = this.premioBase;
        else if (precisao >= 0.5) ganho = Math.round(this.premioBase * 0.4);

        p.money += ganho;
        return ganho;
    }
}