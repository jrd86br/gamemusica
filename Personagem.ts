export class Personagem {
    
    constructor(
        public nome: string = "", 
        public vida: number = 100,
        public skill: number = 10,
        public money: number = 0,
        public energia: number = 100,
        
    ) {}
}



const equip: Equip = new Equip("Guitarra")

const pA: Personagem = new Personagem ("Arthur", 100, 10, 0, 100, );

const pB: Personagem = new Personagem ("Bernardo", 100, 10, 0, 100, );

