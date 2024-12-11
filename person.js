class Person {
    constructor (name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

displayPerson () {
    const personDiv = document.getElementById("person-div");
    personDiv.innerHTML += `
    <div class = "person">
    <p>Name: ${this.name}</p>
    <p>Age: ${this.age}</p>
    <p>Country: ${this.country}</p>
    
    </div>
    
    `;
}};

const person1 = new Person("Ivan", 18, "Macedonia");
const person2 = new Person("Stefan", 20, "Bulgaria");

person1.displayPerson();
person2.displayPerson();