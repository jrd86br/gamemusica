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
    console.log("1. Trenar");
    option = +teclado('Escolha seu Personagem: ');


}


