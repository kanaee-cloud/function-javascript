class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        return `Name: ${this.name} Age: ${this.age} years old`
    }
}

const person1 = new Person('Wahyu', 30);
const person2 = new Person('Skakmat', 25);

document.getElementById("infoPerson1").textContent = person1.displayInfo();
document.getElementById("infoPerson2").textContent = person2.displayInfo();
