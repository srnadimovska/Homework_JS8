class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  animalSound() {
    const animalDiv = document.getElementById("animal");
    animalDiv.innerHTML += `
    <div class="dog">
    <p>${this.species}</p>
    <p>${this.sound}</p>
    </div>
    `;
  }
}

class Dog extends Animal {
  constructor(species, sound, color, image) {
    super(species, sound);
    this.color = color;
    this.image = image;
  }
  animalSound() {
    const animalDiv = document.getElementById("animal");
    animalDiv.innerHTML += `
        <div class = "dog">
        <p>${this.species}</p>
         <p>${this.sound}</p> 
         <p>${this.color}</p>
         <img width="200" src="${this.image}">
        </div>
        `;
  }
}

const animal1 = new Dog("Dog", "WOOF!", "Black", "images/black_dog.jpg");
const animal2 = new Dog("Dog", "WOOF!", "brown", "images/brown_dog.jpg");
const animal3 = new Dog("Dog", "WOOF!", "white", "images/white_dog.jpg");

const animals = [animal1, animal2, animal3];
const animalContainer = document.getElementById("animal");

animals.forEach((animal) => {
  animalContainer.innerHTML += `

        <div class = "dog">
        <p>${animal.species}</p>
         <p>${animal.sound}</p> 
         <p>${animal.color}</p>
         <img width="200" src="${animal.image}">
        </div>
        `;
});
