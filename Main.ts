import { Equip } from "./equip.ts";
import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";

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
    console.log(`> Selecionado: ${personagemSelecionado.nome} (HP: ${personagemSelecionado.vida}, Skill: ${personagemSelecionado.skill})`);
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

    case 9:
        if (!personagemSelecionado) {
            console.log('\n[Atenção] Você não selecionou nenhum personagem! Escolha um antes de sair.');
            option = 0;
        } else {
            console.log(`\nJogo iniciado com o personagem: ${personagemSelecionado}! Boa sorte!`);

        }
        break

    default:
        console.log("[erro]")
        break

}
option = 0;

while (option !== 9) {
    try {
        console.log('\n-----------------------------');
        console.log(`> ${personagemSelecionado!.nome} | Vida: ${personagemSelecionado!.vida} | Skill: ${personagemSelecionado!.skill} | Energia: ${personagemSelecionado!.energia} | Money: ${personagemSelecionado!.money}`);
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
                case 3:
                    

            case 9:
                console.log(`\n Saindo Até mais ${personagemSelecionado!.nome}`)
                break;
            default:
                console.log("[erro] Opção inválida")
                break;

        }
    } catch (e) {
    console.log(`\n⚠️ ${(e as Error).message} — ${personagemSelecionado!.nome} ficou sem energia para treinar!`);
    }
    }




