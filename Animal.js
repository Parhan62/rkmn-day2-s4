class Animal{
    #age
    constructor(name, food, energy, breath, age){
        this.name = name
        this.food =  food
        this.energy = energy
        this.breath = breath
        this.#age = age
    }

    getAge(){
        return this.#age
    }

    isAdult(){
        return this.#age > 18
    }

    get showKTH(){
        return this.#age
    }
}
export default Animal