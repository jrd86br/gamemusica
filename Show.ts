import { Personagem } from "./Personagem.ts";

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

    tocar(p: Personagem): number {
        p.energia = Math.max(0, p.energia - this.custoEnergia);

        // nota do show: skill + um pouco de sorte (0 a 19)
        const nota = p.skill + Math.floor(Math.random() * 20);

        let ganho = 0;
        if (nota >= 60) ganho = this.premioBase;
        else if (nota >= 30) ganho = Math.round(this.premioBase * 0.4);

        p.money += ganho;
        return ganho;
    }
}