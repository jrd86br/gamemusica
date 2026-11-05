import { Equip } from "./equip.ts";


//Classe é o molde do objeto, e o objeto é a instância da classe. A classe define as propriedades e métodos que os objetos terão, enquanto os objetos são instâncias concretas dessas classes com valores específicos para suas propriedades.
export class Personagem {
    //atributos são as características do objeto, que podem ser representadas por variáveis ou propriedades. No caso da classe Personagem, os atributos são: nome, skill, money, energia, equip e popularidade.
  
    private _nome: string;
    private _skill: number;
    private _money: number;
    private _energia: number;
    private _equip: Equip;
    private _popularidade: number;
//constructor é uma função especial executada ao instanciar o objeto
//entre os () deve ficar os parâmetros que serão passados para o objeto, e entre as {} deve ficar o código que será executado ao instanciar o objeto.
    constructor(equip: Equip, popularidade: number) {
        
        this._nome = "";
        this._skill = 10;
        this._money = 0;
        this._energia = 100;
        this._equip = equip;
        this._popularidade = popularidade;
      }

    //getters são métodos que permitem acessar os valores dos atributos do objeto. Eles são usados para encapsular a lógica de acesso e garantir que os valores retornados sejam válidos.
    
    public get nome() : string {
        return this._nome;
    }
    
    public get skill() : number {
        return this._skill;
    }

    public get money() : number {
        return this._money;
    }

    public get energia() : number {
        return this._energia;
    }

    public get equip() : Equip {
        return this._equip;
    }
    public get popularidade() : number {
        return this._popularidade;
    }

    
    //setters são métodos que permitem alterar os valores dos atributos do objeto. Eles são usados para encapsular a lógica de validação e garantir que os valores atribuídos aos atributos sejam válidos.
    set nome(valor: string) {
        if (valor.trim() ===""){
            throw new Error("Nome não pode ser vazio")
        }
        this._nome= valor;
    }

    
    set money(valor: number) {
        if (valor < 0) {
            throw new Error("Money não pode ser negativo");
            
            
        }
        this._money = valor;
    }

    set energia(valor: number) {
        if (valor < 0) {
            throw new Error("Energia não pode ser negativa");
            
            
        }
        this._energia = valor;
    }
    

    

//esses são os métodos que definem o comportamento do objeto, ou seja, as ações que ele pode realizar. No caso da classe Personagem, os métodos são: treinarSkill(), descansar(), gastarEnergia() e receberMoney().
    
      treinarSkill():void{
          this._energia -=Math.floor(5+Math.random()*5)
          if(this._energia<=0){
              this._energia = 0
                            
            }
            this._skill +=Math.floor(5+Math.random()*5)
    }
        descansar(): void {
            this._energia += Math.floor(10 + Math.random() * 10);
            if (this._energia > 100) {
             this._energia = 100;
            }
    }
    gastarEnergia(valor: number): void {
        this._energia -= valor;
        if (this._energia < 0) {
            this._energia = 0;
        }
    }

    receberMoney(valor: number): void {
        if (valor < 0) {
            throw new Error("O valor recebido não pode ser negativo.");
        }
        this._money += valor;
    }
}





