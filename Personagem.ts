import { Equip } from "./equip.ts";

export class Personagem {
    //atributos
    public _nome: string;
    public _skill: number;
    public _money: number;
    public _energia: number;
    public _equip: Equip;
    constructor(equip: Equip) {
        this._nome = "";
        this._skill = 10;
        this._money = 0;
        this._energia = 100;
        this._equip = equip;

      }
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

}





