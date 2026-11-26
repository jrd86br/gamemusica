import { Equip } from "./equip.ts";
import { Personagem } from "./Personagem.ts";

export class Loja {
    private catalogo: Equip[];

    constructor(catalogo: Equip[]) {
        this.catalogo = catalogo;
    }

    listar(p: Personagem): void {
        console.log("\n--- LOJA DE EQUIPAMENTOS ---");
        this.catalogo.forEach((item, index) => {
            const status = p.Inventario.temItem(item) ? "(já possui)" : `R$ ${item.preco}`;
            console.log(`${index + 1}. ${item.descricao()} - ${status}`);
        });
        console.log("0. Voltar");
    }

    comprar(p: Personagem, indice: number): boolean {
        const item = this.catalogo[indice];

        if (!item) {
            console.log("[erro] Item inválido");
            return false;
        }
        if (p.Inventario.temItem(item)) {
            console.log(`\n⚠️ Você já possui ${item.nome}.`);
            return false;
        }
        if (p.money < item.preco) {
            console.log(`\n⚠️ Dinheiro insuficiente! Faltam R$ ${item.preco - p.money}.`);
            return false;
        }

        p.gastarMoney(item.preco);
        p.Inventario.adicionarItem(item);
        console.log(`\n🛒 Você comprou ${item.nome}! Dinheiro restante: R$ ${p.money}`);
        return true;
    }
}