import { Equip } from "./equip.ts";

export class Personagem {
    //atributos
    nome: string;
    vida: number;
    skill: number;
    money: number;
    energia: number;
    equip: Equip;
    constructor(equip: Equip) {
        this.nome = "";
        this.vida = 100;
        this.skill = 10;
        this.money = 0;
        this.energia = 100;
        this.equip = equip;

      }
      treinarSkill():void{
          this.energia -=Math.floor(5+Math.random()*5)
          if(this.energia<=0){
              this.energia = 0
                            
            }
            this.skill +=Math.floor(5+Math.random()*5)
    }
        descansar(): void {
            this.energia += Math.floor(10 + Math.random() * 10);
            if (this.energia > 100) {
             this.energia = 100;
            }
    }
        tocarShow(): void {
            if (this.energia >)
        }
}





