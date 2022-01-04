class Animal{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

}


class Cat extends Animal{
    constructor(name){
        super(name);
    }
    Meow(){
        return `Cat ${this.name} is saying meow`;
    }
}
let animal = new Cat('Garfield');

console.log(animal.getName());
console.log(animal.Meow());

console.log(animal.getName() === 'Garfield'); 
console.log(animal.Meow() === 'Cat Garfield is saying meow'); 