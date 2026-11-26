export class Equip {
    nome: string;
    tipoSkill: string;
    preco: number;
    multSkill: number;    
    multEnergia: number;  

    constructor(
        nome: string,
        tipoSkill: string,
        preco: number = 0,
        multSkill: number = 1,
        multEnergia: number = 1
    ) {
        this.nome = nome;
        this.tipoSkill = tipoSkill;
        this.preco = preco;
        this.multSkill = multSkill;
        this.multEnergia = multEnergia;
    }

    descricao(): string {
        return `${this.nome} (${this.tipoSkill}) | Skill x${this.multSkill} | Cansaço x${this.multEnergia}`;
    }

    usar(): void {
        console.log(`Usando o equipamento: ${this.nome} (${this.tipoSkill})`);
    }
}