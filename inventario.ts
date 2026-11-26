import { Equip } from "./equip.ts";

export class Inventario {
    private itens: Equip[] = [];

    public adicionarItem(item: Equip): void {
        this.itens.push(item);
        console.log(`📦 Item [${item.nome}] adicionado ao inventário!`);
    }

    public listarItens(): void {
        console.log("\n--- SEU INVENTÁRIO DE EQUIPAMENTOS ---");
        if (this.itens.length === 0) {
            console.log("O inventário está vazio.");
            return;
        }
        this.itens.forEach((item, index) => {
            console.log(`[${index + 1}] ${item.descricao()}`);
        });
    }

    public pegarItem(index: number): Equip | undefined {
        return this.itens[index];
    }

    public get totalItens(): number {
        return this.itens.length;
    }

    public temItem(item: Equip): boolean {
        return this.itens.some(i => i.nome === item.nome);
    }
    

}