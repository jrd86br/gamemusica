import { Equip } from "./equip.ts";
import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";
import { Show } from "./Show.ts";

//começa o jogo
const teclado = prompt();

teclado("Pressione enter para continuar...")

//não sei se há redundancia em alguma outra parte do codigo com essa parte do equip,

const equip: Equip = new Equip("Guitarra", "tipo 1");
const equip2: Equip = new Equip("Baixo", "tipo 2");

//serve para armazenar o personagem selecionado pelo jogador. Inicialmente, ele é indefinido, pois o jogador ainda não escolheu um personagem. Depois que o jogador escolhe um personagem, a variável é atualizada para referenciar o objeto Personagem correspondente.
let personagemSelecionado: Personagem | undefined;


//cria dois personagens com equipamentos diferentes
//chama o construtor da classe Personagem, passando o equipamento e a popularidade inicial como argumentos. Em seguida, define o nome do personagem usando o setter nome.
const pA: Personagem = new Personagem(equip, 5);
pA.nome = "Arthur";



const pB: Personagem = new Personagem(equip2,5);
pB.nome = "Bernardo";

const shows: Show[] = [
    new Show("Bar do Zé", 100, 0, 0, 20),
    new Show("Pub Rock Night", 250, 10, 30, 30),
    new Show("Casa de Shows Central", 600, 25, 80, 40),
];

//esse let option serve para armazenar a opção escolhida pelo jogador no menu principal. Inicialmente, ele é definido como 0, mas será atualizado com base na entrada do jogador durante o loop do menu.
let option = 0;


//aqui começa a lógica do jogo, onde o jogador escolhe um personagem e interage com o menu principal. O loop while continua até que o jogador escolha a opção de sair (9). Dentro do loop, o programa exibe informações sobre o personagem selecionado, apresenta as opções do menu e executa ações com base na escolha do jogador.
if (personagemSelecionado) {
    console.log(`> Selecionado: ${personagemSelecionado.nome} (HP: ${personagemSelecionado.energia}, Skill: ${personagemSelecionado.skill}, Popularidade: ${personagemSelecionado.popularidade})`);
} else {
    console.log('> Selecionado: Nenhum');
}
while (!personagemSelecionado) {
    
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
}
option = 0;

while (option !== 9) {
    try {
        console.log('\n-----------------------------');
        console.log(`> ${personagemSelecionado!.nome}  | Skill: ${personagemSelecionado!.skill} | Energia: ${personagemSelecionado!.energia} | Money: ${personagemSelecionado!.money} | Popularidade: ${personagemSelecionado!.popularidade}`);
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
                    console.log("Onde será o próximo show?");
                    shows.forEach((show, index) => {
                       if (show.desbloqueado(personagemSelecionado!)) {
                            console.log(`${index + 1}. ${show.local} (Prêmio: ${show.premio}`);
                        } else {
                            console.log(`${index + 1}. ${show.local} (Bloqueado) Exigências: Popularidade mínima: ${show.popMinima}, Skill mínima: ${show.skillExigida}`);
                        }
                    });
                    console.log("0. Voltar");
                    const escolha=+teclado("Escolha o show: ");

                    if (escolha ===0) {
                        break;
                    }
                    const show = shows[escolha - 1];
                    if (!show) {
                        console.log("[erro] Show inválido");
                        break;
                    }
                    if (!show.desbloqueado(personagemSelecionado!)) {
                        console.log(`\n⚠️ ${personagemSelecionado!.nome} não atende aos requisitos para tocar nesse show!`);
                        break;
                    }
                    if (!show.podeTocar(personagemSelecionado!)) {
                        console.log(`\n⚠️ ${personagemSelecionado!.nome} não tem energia suficiente para tocar nesse show!`);
                        break;
                    }
                    console.log(`\n🎤 ${personagemSelecionado!.nome} vai tocar no show em ${show.local}!`);
                    teclado("Pressione enter para começar a tocar...");
                    const ganho = show.tocar(personagemSelecionado!, teclado);
                    if (ganho >= 100) {
                        console.log(`\n🎉 Show Incrivel! ${personagemSelecionado!.nome} ganhou ${ganho} de money!`);
                    } else if (ganho > 0) {
                        console.log(`\n👍 Foi um bom show! ${personagemSelecionado!.nome} ganhou ${ganho} de money!`);
                    } else {
                        console.log(`\n😢 Que coisa horrível! ${personagemSelecionado!.nome} não ganhou money nesse show.`);
                    }
                    console.log(`\n💰 Dinheiro total: ${personagemSelecionado!.money} Energia: ${personagemSelecionado!.energia}`);
                    break;
                }
            

            case 9:
                console.log(`\n Saindo, Até mais ${personagemSelecionado!.nome}`)
                break;
            default:
                console.log("[erro] Opção inválida")
                break;

        }
    //serve para capturar e exibir erros que possam ocorrer durante a execução do código dentro do bloco try. Se algum erro for lançado, ele será capturado pelo bloco catch, e a mensagem de erro será exibida no console.    
    } catch (e) {
    console.log(`\n⚠️ ${(e as Error).message} `);
    }
    }




