import { Equip } from "./equip.ts";

export class Personagem {
    //atributos
    private _nome: string;
    private _skill: number;
    private _money: number;
    private _energia: number;
    private _equip: Equip;

    constructor(equip: Equip) {
        this._nome = "";
        this._skill = 10;
        this._money = 0;
        this._energia = 100;
        this._equip = equip;
      }

    //getters
    
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

    //setters
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
    

    // energia e skill eu NÃO exponho setter público —
    // só podem mudar através dos métodos da própria classe


    
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





