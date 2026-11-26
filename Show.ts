import { Personagem } from "./Personagem.ts";
import { Mania } from "./Mania.ts";

export abstract class Show {
    local: string;
    protected premioBase: number;
    protected custoEnergia: number;
    protected popularidadeMinima: number;
    protected skillMinima: number;

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

    desbloqueado(personagem: Personagem): boolean {
        return personagem.popularidade >= this.popularidadeMinima && personagem.skill >= this.skillMinima;
    }

    podeTocar(personagem: Personagem): boolean {
        return personagem.energia >= this.custoEnergia;
    }

    tocar(personagem: Personagem, teclado: (msg: string) => string): number {
        personagem.gastarEnergia(this.custoEnergia);

        const mania = new Mania(teclado);
        const precisao = mania.jogar(personagem.skill);

        const ganho = this.calcularGanho(precisao);
        personagem.ganharPopularidade(this.calcularPopularidade(precisao));

        personagem.receberMoney(ganho);
        return ganho;
    }

    protected abstract calcularGanho(precisao: number): number;
    protected abstract calcularPopularidade(precisao: number): number;
    abstract descricao(): string;
    
}