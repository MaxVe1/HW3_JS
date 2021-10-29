let Animals = ['Lion','Tiger','Pinguine'];
let Workers = ['John','Mike','Kate'];

class Zoo {  

    constructor(name, address, area, estdate, price){
        this.name = name
        this.address = address
        this.area = area
        this.estdate = estdate
        this.price = price
        this.animals = Animals
        this.workers = Workers
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

    get address(){
        return this._address
    }

    set address(value){
        if(typeof(value) === 'string'){
            this._address = value
        } else{
            console.log('Invalid input: address must be set to a String.')
        }
    }    

    get area(){
        return this._area
    }

    set area(value){
        if(typeof(value) === 'number'){
            this._area = value
        } else{
            console.log('Invalid input: Area must be set to a Number.')
        }
    }

        get estdate(){
        return this._estdate
    }

    set estdate(value){
        if(typeof(value) === 'string'){
            this._estdate = value
        } else{
            console.log('Invalid input: date must be set to a String.')
        }
    }

    get price(){
        return this.price
    }    
    set price(value){
        if(!(value)){
            this._price = 'Free'
        } else{
            this._price = value;
        }
    }
    get workers(){
        return this._workers
    }
    set workers(value){
        if((value)){
            this._workers = value;        
    }}
    get animals(){
        return this._animals
    }
    set animals(value){
        if((value)){
            this._animals = value;        
    }}
    addAnimal(value){
       Animals.push(value)
    }
    removeAnimal(value){
        this.animals = Animals.filter(function(i) {
        return i!== value;
    })       
 
    }
    addWorker(value){
       Workers.push(value)
    }
    showAnimals(){
        console.log(Animals);
    }    
     showWorkers(){
        console.log(Workers);
    }
    showIDAnimal(value){
        console.log(Animals.indexOf(value)); 
    }
}

const myZoo = new Zoo("ZooPark",'New York', 1000, '01.01.1900',100, Animals, Workers)
myZoo.addAnimal('Elephant');
myZoo.addWorker('Nick');
myZoo.showIDAnimal('Lion');
myZoo.removeAnimal('Tiger');
myZoo.showAnimals();
myZoo.showWorkers();
console.log(myZoo);
