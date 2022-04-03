
console.log(__dirname, __filename);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;