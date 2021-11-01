class Animal {
        constructor(name, weight, height, type, color, place_of_origin){
        this.name = name
        this.weight = weight
        this.height = height
        this.type = type
        this.color = color
        this.place_of_origin = place_of_origin                 
    }
    get getInfo(){
        return `Name - ${this._name} type - ${this._type}, color - ${this._color}, weight - ${this._weight}, height - ${this._height}, place of origin - ${this._place_of_origin}`
    }

    get name(){
        return this._name
    }

     set name(value){
        if(typeof(value) === 'string'){
            this._name = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }
    get weight(){
        return this._weight
    }

     set weight(value){
        if(typeof(value) === 'number'){
            this._weight = value
        } else{
            console.log('Invalid input: weight must be set to a Number.')
        }
    }
        get height(){
        return this._height
    }

     set height(value){
        if(typeof(value) === 'number'){
            this._height = value
        } else{
            console.log('Invalid input: weight must be set to a Number.')
        }
    } 

    get type(){
        return this._type
    }

     set type(value){
        if(typeof(value) === 'string'){
            this._type = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }

    get color(){
        return this._color
    }

     set color(value){
        if(typeof(value) === 'string'){
            this._color = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }
    
    get place_of_origin(){
        return this._place_of_origin
    }

     set place_of_origin(value){
        if(typeof(value) === 'string'){
            this._place_of_origin = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }
} 

class Snakes extends Animal{
    constructor(name, weight, height, type, color, place_of_origin, isPoisonous){
        super(name, weight, height, type, color, place_of_origin);
        this._isPoisonous = isPoisonous;
    }
    get getInfo() {
        return super.getInfo + `, isPoisonous - ${this._isPoisonous}`
    }
    get isPoisonous(){
        return this._isPoisonous; 
    }

     set isPoisonous(value){
        if(typeof(value) === 'boolean'){
            this._isPoisonous = value
        } else{
            console.log('Invalid input: name must be set to a boolean.')
        }
    }
}

class Birds extends Animal{
    constructor(name, weight, height, type, color, place_of_origin, isFlying){
        super(name, weight, height, type, color, place_of_origin);
        this._isFlying = isFlying;
    }
    get getInfo() {
        return super.getInfo + `, isFlying - ${this._isFlying}`
    }

    get isFlying(){
        return this._isFlying; 
    }

     set isFlying(value){
        if(typeof(value) === 'boolean'){
            this._isFlying = value
        } else{
            console.log('Invalid input: name must be set to a boolean.')
        }
    }
}

class CatLike extends Animal{
    constructor(name, weight, height, type, color, place_of_origin, isSafeToPet){
        super(name, weight, height, type, color, place_of_origin);
        this._isSafeToPet = isSafeToPet;
    }
     get getInfo() {
        return super.getInfo + `, isSafeToPet - ${this._isSafeToPet}`
    }

    get isSafeToPet(){
        return this._isSafeToPet; 
    }

     set isSafeToPet(value){
        if(typeof(value) === 'boolean'){
            this._isSafeToPet = value
        } else{
            console.log('Invalid input: name must be set to a boolean.')
        }
    }
}



const Cat = new Animal('Barsik',1,1,'Mammal','Black','Europe')

const Gadyuka = new Snakes('Gadyuka',1,1,'Reptile','Black','Asia', true)
const Eagle = new Birds('Eagle',1,1,'Bird','Black','America', true)
const Puma = new CatLike('Puma',1,1,'Mammal','Black','America', false)
console.log(Puma.getInfo);
console.log(Cat)
console.log(Gadyuka)
console.log(Gadyuka.isPoisonous)
console.log(Eagle)
console.log(Puma)



class Worker {
        constructor(firstname, lastname, phone){
        this.firstname = firstname
        this.lastname = lastname
        this.phone = phone                         
    }
    get firstname(){
        return this._firstname
    }

     set firstname(value){
        if(typeof(value) === 'string'){
            this._firstname = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }

    get lastname(){
        return this._lastname
    }

    set lastname(value){
        if(typeof(value) === 'string'){
            this._lastname = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }

    get phone(){
        return this._phone
    }

    set phone(value){
        if(typeof(value) === 'string'){
            this._phone = value
        } else{
            console.log('Invalid input: name must be set to a String.')
        }
    }

}

const Doctor = new Worker('Doctor','AiBolit','103',)
console.log(Doctor)
