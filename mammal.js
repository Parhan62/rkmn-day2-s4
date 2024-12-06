import Animal from "./Animal.js";

class Mammal extends Animal{
    constructor(name, food, energy, breath){
        super(name, food, energy, breath);
    }

    isAdult(){
        return this.getAge() > 50
    }

}

export default Mammal;