import { Equip } from "./equip.ts";
import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";
import { Show } from "./show.ts";


const teclado = prompt();

teclado("Pressione enter para continuar...")

const equip: Equip = new Equip("Guitarra", "tipo 1");
const equip2: Equip = new Equip("Baixo", "tipo 2");

let personagemSelecionado: Personagem | undefined;


const pA: Personagem = new Personagem(equip);
pA.nome = "Arthur";




const pB: Personagem = new Personagem(equip2);
pB.nome = "Bernardo";




let option = 0;

if (personagemSelecionado) {
    console.log(`> Selecionado: ${personagemSelecionado.nome} (HP: ${personagemSelecionado.energia}, Skill: ${personagemSelecionado.skill})`);
} else {
    console.log('> Selecionado: Nenhum');
}

console.log('-----------------------------');
console.log(`1. ${pA.nome}`);
console.log(`2. ${pB.nome}`)


option = +teclado('Escolha seu Personagem: ');

switch (option) {
    case 1:
        // Adicionar descrição de personagens

        personagemSelecionado = pA
        console.log(`\n✨ Você escolheu ${personagemSelecionado.nome}!`);
        break

    case 2:

        personagemSelecionado = pB
        console.log(`\n✨ Você escolheu ${personagemSelecionado.nome}!`);
        break


    default:
        console.log("[erro], escolha 1 ou 2")
        break

}
option = 0;

while (option !== 9) {
    try {
        console.log('\n-----------------------------');
        console.log(`> ${personagemSelecionado!.nome}  | Skill: ${personagemSelecionado!.skill} | Energia: ${personagemSelecionado!.energia} | Money: ${personagemSelecionado!.money}`);
        console.log('-----------------------------');
        console.log("1. Ensaiar");
        console.log("2. Descansar")
        console.log("3. Tocar show");
        
        console.log("9. Sair");

        option = +teclado('Escolha uma opção: ');
        switch (option) {
            case 1:
                if (personagemSelecionado!.energia > 0) {
                    personagemSelecionado!.treinarSkill();
                    console.log(`\n💪 ${personagemSelecionado!.nome} treinou! Skill: ${personagemSelecionado!.skill} | Energia: ${personagemSelecionado!.energia}`);
                } else {
                    console.log(`\n⚠️ ${personagemSelecionado!.nome} está sem energia para treinar!`);
                }
                break;
                case 2:
                    if (personagemSelecionado!.energia < 100) {
                        personagemSelecionado!.descansar();
                        console.log(`\n😴 ${personagemSelecionado!.nome} descansou! Energia: ${personagemSelecionado!.energia}`);
                    } else {
                        console.log(`\n${personagemSelecionado!.nome} já está com energia máxima, não precisa descansar.`);
                    }
                    break;
                case 3: {
                    const show = new Show("Bar do Zé");

                if (!show.podeTocar(personagemSelecionado!)) {
                    console.log("\n⚠️ ${personagemSelecionado!._nome} está cansado demais para tocar!");
                    break;
                }

                console.log("\n🎤 ${personagemSelecionado!._nome} sobe ao palco do ${show.local}...");
                teclado("💡 As luzes se apagam. Pressione enter...");

                const ganho = show.tocar(personagemSelecionado!);

                if (ganho >= 100) {
                    console.log("🎉 A plateia canta junto! Show incrível!");
                } else if (ganho > 0) {
                    console.log("👏 Aplausos animados. Foi um bom show.");
                } else {
                    console.log("😬 Vaias e murmúrios... Hora de ensaiar mais.");
                }
                console.log(`💰 Você ganhou R$ ${ganho} | Energia: ${personagemSelecionado!.energia}`);
                break;
            }

            case 9:
                console.log(`\n Saindo, Até mais ${personagemSelecionado!.nome}`)
                break;
            default:
                console.log("[erro] Opção inválida")
                break;

        }
    } catch (e) {
    console.log(`\n⚠️ ${(e as Error).message} — ${personagemSelecionado!.nome} ficou sem energia para treinar!`);
    }
    }




