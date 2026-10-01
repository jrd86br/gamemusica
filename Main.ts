import { Equip } from "./equip.ts";
import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";

const teclado = prompt();

teclado("Pressione enter para continuar...")

const equip: Equip = new Equip("Guitarra", "tipo 1");
const equip2: Equip = new Equip("Baixo", "tipo 2");

let personagemSelecionado: Personagem | undefined;


const pA: Personagem = new Personagem(equip);
pA._nome = "Arthur";




const pB: Personagem = new Personagem(equip2);
pB._nome = "Bernardo";




let option = 0;

if (personagemSelecionado) {
    console.log(`> Selecionado: ${personagemSelecionado._nome} (HP: ${personagemSelecionado._energia}, Skill: ${personagemSelecionado._skill})`);
} else {
    console.log('> Selecionado: Nenhum');
}

console.log('-----------------------------');
console.log(`1. ${pA._nome}`);
console.log(`2. ${pB._nome}`)


option = +teclado('Escolha seu Personagem: ');

switch (option) {
    case 1:
        // Adicionar descrição de personagens

        personagemSelecionado = pA
        console.log(`\n✨ Você escolheu ${personagemSelecionado._nome}!`);
        break

    case 2:

        personagemSelecionado = pB
        console.log(`\n✨ Você escolheu ${personagemSelecionado._nome}!`);
        break


    default:
        console.log("[erro], escolha 1 ou 2")
        break

}
option = 0;

while (option !== 9) {
    try {
        console.log('\n-----------------------------');
        console.log(`> ${personagemSelecionado!._nome}  | Skill: ${personagemSelecionado!._skill} | Energia: ${personagemSelecionado!._energia} | Money: ${personagemSelecionado!._money}`);
        console.log('-----------------------------');
        console.log("1. Ensaiar");
        console.log("2. Descansar")
        console.log("3. Tocar show");
        
        console.log("9. Sair");

        option = +teclado('Escolha uma opção: ');
        switch (option) {
            case 1:
                if (personagemSelecionado!._energia > 0) {
                    personagemSelecionado!.treinarSkill();
                    console.log(`\n💪 ${personagemSelecionado!._nome} treinou! Skill: ${personagemSelecionado!._skill} | Energia: ${personagemSelecionado!._energia}`);
                } else {
                    console.log(`\n⚠️ ${personagemSelecionado!._nome} está sem energia para treinar!`);
                }
                break;
                case 2:
                    if (personagemSelecionado!._energia < 100) {
                        personagemSelecionado!.descansar();
                        console.log(`\n😴 ${personagemSelecionado!._nome} descansou! Energia: ${personagemSelecionado!._energia}`);
                    } else {
                        console.log(`\n${personagemSelecionado!._nome} já está com energia máxima, não precisa descansar.`);
                    }
                    break;
                case 3:
                    

            case 9:
                console.log(`\n Saindo, Até mais ${personagemSelecionado!._nome}`)
                break;
            default:
                console.log("[erro] Opção inválida")
                break;

        }
    } catch (e) {
    console.log(`\n⚠️ ${(e as Error).message} — ${personagemSelecionado!._nome} ficou sem energia para treinar!`);
    }
    }




