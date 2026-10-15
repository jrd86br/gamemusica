export class Mania {
    private teclado: (msg: string) => string;
    private teclas: string[];
    private totalNotas: number;

    constructor(teclado: (msg: string) => string, totalNotas: number = 12) {
        this.teclado = teclado;
        this.teclas = ["a", "s", "d", "f"];
        this.totalNotas = totalNotas;
    }

    // devolve a precisão: 0 (errou tudo) a 1 (tudo perfeito)
    jogar(skill: number): number {
        // a skill alarga um pouco as janelas de acerto (em milissegundos)
        const janelaPerfeito = 800 + skill * 5;
        const janelaBom = 1800 + skill * 10;

        let pontos = 0;
        let combo = 0;
        let maiorCombo = 0;

        console.log("\n🎹 Digite a tecla da coluna e aperte ENTER. Quanto mais rápido, melhor!");
        console.log("   Colunas: A | S | D | F");
        this.teclado("Pressione enter quando estiver pronto...");

        for (let i = 1; i <= this.totalNotas; i++) {
            const coluna = Math.floor(Math.random() * 4);
            this.desenhar(coluna);

            const inicio = Date.now();
            const resposta = this.teclado(`Nota ${i}/${this.totalNotas} > `).trim().toLowerCase();
            const tempo = Date.now() - inicio;

            if (resposta !== this.teclas[coluna] || tempo > janelaBom) {
                console.log("❌ ERROU");
                combo = 0;
            } else if (tempo <= janelaPerfeito) {
                console.log("✨ PERFEITO");
                pontos += 100;
                combo++;
            } else {
                console.log("👍 BOM");
                pontos += 50;
                combo++;
            }

            if (combo > maiorCombo) maiorCombo = combo;
            if (combo >= 3) console.log(`🔥 Combo x${combo}`);
        }

        const precisao = pontos / (this.totalNotas * 100);
        console.log(`\n📊 Precisão: ${Math.round(precisao * 100)}% | Maior combo: ${maiorCombo}`);
        return precisao;
    }

    private desenhar(coluna: number): void {
        const celulas: string[] = [];
        for (let i = 0; i < 4; i++) {
            celulas.push(i === coluna ? " ● " : "   ");
        }
        console.log("\n|" + celulas.join("|") + "|");
        console.log("  A   S   D   F");
    }
}