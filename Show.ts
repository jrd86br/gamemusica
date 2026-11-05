import { Personagem } from "./Personagem.ts";
import { Mania } from "./Mania.ts";

export class Show {
    local: string;
    private premioBase: number;
    private custoEnergia: number;
    private popularidadeMinima: number;
    private skillMinima: number;

    constructor(
        local: string,
        premioBase: number,
        popularidadeMinima: number,
        skillMinima: number,
        custoEnergia: number
    ) {
        this.local = local;
        this.premioBase = premioBase;
        this.popularidadeMinima = popularidadeMinima;
        this.skillMinima = skillMinima;
        this.custoEnergia = custoEnergia;
    }

    get premio(): number {
        return this.premioBase;
    }

    get popMinima(): number {
        return this.popularidadeMinima;
    }

    get skillExigida(): number {
        return this.skillMinima;
    }

    desbloqueado(p: Personagem): boolean {
        return p.popularidade >= this.popularidadeMinima && p.skill >= this.skillMinima;
    }

    podeTocar(p: Personagem): boolean {
        return p.energia >= this.custoEnergia;
    }

    tocar(p: Personagem, teclado: (msg: string) => string): number {
        p.gastarEnergia(this.custoEnergia);

        const mania = new Mania(teclado);
        const precisao = mania.jogar(p.skill);

        let ganho = 0;
        if (precisao >= 0.8) ganho = this.premioBase;
        else if (precisao >= 0.5) ganho = Math.round(this.premioBase * 0.4);

        p.receberMoney(ganho);
        return ganho;
    }
}