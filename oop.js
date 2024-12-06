//Encapsulation

class Animal{
    #kth
    constructor(name, food, energy, breath){
        this.name = name;
        this.food =  food
        this.energy = energy
        this.breath = breath
        this.#kth = 20
    }

    isAdult(){
        return this.#kth>18
    }

    get showKTH(){
        return this.#kth
    }
}

const elephant = new Animal('gajah', 'herbivore', 100, true)
const tiger = new Animal('macan', 'carnivore', 50, true)
tiger.name = 'tiger'

// console.log(elephant.food)
console.log(tiger)