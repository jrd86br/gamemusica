import { Equip } from "./equip.ts";
import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";
import { Show } from "./Show.ts";
import { Bar } from "./Bar.ts";
import { JJ } from "./JJ.ts";
import { Opiniao } from "./Opiniao.ts";
import { Arena } from "./Arena.ts";
import { Inventario } from "./inventario.ts";
import { Loja } from "./Loja.ts";

//começa o jogo
const teclado = prompt();

teclado("Pressione enter para continuar...")

//não sei se há redundancia em alguma outra parte do codigo com essa parte do equip,

const equip: Equip = new Equip("Strato Comum", "tipo 1");
const equip2: Equip = new Equip("Les Paul Comum", "tipo 2");

//serve para armazenar o personagem selecionado pelo jogador. Inicialmente, ele é indefinido, pois o jogador ainda não escolheu um personagem. Depois que o jogador escolhe um personagem, a variável é atualizada para referenciar o objeto Personagem correspondente.
let personagemSelecionado: Personagem | undefined;


//cria dois personagens com equipamentos diferentes
//chama o construtor da classe Personagem, passando o equipamento e a popularidade inicial como argumentos. Em seguida, define o nome do personagem usando o setter nome.
const pA: Personagem = new Personagem(equip, 5);
pA.nome = "Arthur";



const pB: Personagem = new Personagem(equip2,5);
pB.nome = "Bernardo";

const shows: Show[] = [
    new Bar(),
    new JJ(),
    new Opiniao(),
    new Arena()
];

const loja = new Loja([
    new Equip("Guitarra de Estudo", "tipo 1", 200, 1.2, 1.0),   // um pouco melhor, sem desvantagem
    new Equip("Les Paul Furiosa", "tipo 1", 500, 1.6, 1.5),     // muito skill, mas cansa bastante
    new Equip("Guitarra Zen", "tipo 1", 350, 0.9, 0.6),         // pouco skill, mas quase não cansa
]);

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
        console.log("4. Ver inventario");
        console.log("5. Loja");
        console.log("6. Equipar item");
        
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
                            console.log(`${index + 1}. ${show.local} | Prêmio: ${show.premio}`);
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
                    if (ganho >= show.premio) {
                        console.log(`\n🎉 Show Incrivel! ${personagemSelecionado!.nome} ganhou ${ganho} de money!`);
                    } else if (ganho > 0) {
                        console.log(`\n👍 Foi um bom show! ${personagemSelecionado!.nome} ganhou ${ganho} de money!`);
                    } else {
                        console.log(`\n😢 Que coisa horrível! ${personagemSelecionado!.nome} não ganhou money nesse show.`);
                    }
                    console.log(`\n💰 Money total: ${personagemSelecionado!.money} | Energia: ${personagemSelecionado!.energia}`);
                    break;
                }

                case 4: {
                    const inv = personagemSelecionado!.Inventario;
                    inv.listarItens();
                    break;
                }

                case 5: {
                loja.listar(personagemSelecionado!);
                    const escolhaLoja = +teclado("Escolha o item para comprar: ");
                        if (escolhaLoja === 0) {
                    break;
                    }
                loja.comprar(personagemSelecionado!, escolhaLoja - 1);
                    break;
                }

                case 6: {
                    const inv = personagemSelecionado!.Inventario;
                        inv.listarItens();
                    const escolhaItem = +teclado("Escolha o item para equipar (0 para voltar): ");
                        if (escolhaItem === 0) {
                            break;
                    }
                    const item = inv.pegarItem(escolhaItem - 1);
                        if (!item) {
                            console.log("[erro] Item inválido");
                        break;
                    }
                    personagemSelecionado!.equipar(item);
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




