import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt();

teclado("Pressione enter para continuar...")

const pA: Personagem = new Personagem();
    pA.nome = "Arthur";
    pA.vida = 100;
    pA.skill = 100;
    pA.money = 0;

    console.log(pA)

const pB: Personagem = new Personagem();
    pB.nome = "Bernardo";
    pB.vida = 100;
    pB.skill = 100;
    pB.money = 0;

    console.log(pB)

let option = 0;
while(option !== 9) {
    console.log('1. Start | 9. Exit');
    option = +teclado('Escolha: ');
}