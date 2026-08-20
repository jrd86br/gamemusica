import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt();

teclado("Pressione enter para continuar...")

const p1: Personagem = new Personagem();
    p1.nome = "Arthur";
    p1.vida = 100;
    p1.skill = 100;
    p1.money = 0;

    console.log(p1)

const p2: Personagem = new Personagem();
    p2.nome = "Bernardo";
    p2.vida = 100;
    p2.skill = 100;
    p2.money = 0;

    console.log(p2)

let option = 0;
while(option !== 9) {
    console.log('1. Start | 9. Exit');
    option = +teclado('Escolha: ');
}