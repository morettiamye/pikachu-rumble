const pikachuDiv = document.querySelector(".pikachu");
const opponentDiv = document.querySelector(".opponent");
const path = "assets/images/"

const pokemonArray = [ 
    {
    image: "charmander.png",
    name: "Charmander",
    type: "Fire",
    hp: Math.floor((Math.random() * 30) + 1),
    attack: Math.floor((Math.random() * 10) + 1),
    defense: Math.floor((Math.random() * 10) + 1) * 2
    },
    { 
    image: "squirtle.png",
    name: "Squirtle",
    type: "Water",
    hp: Math.floor((Math.random() * 30) + 1),
    attack: Math.floor((Math.random() * 10) + 1) * .5,
    defense: Math.floor((Math.random() * 10) + 1) * .5
    },
    {
    image: "bulbasaur.png",
    name: "Bulbasaur",
    type: "Grass",
    hp: Math.floor((Math.random() * 30) + 1),
    attack: Math.floor((Math.random() * 10) + 1),
    defense: Math.floor((Math.random() * 10) + 1) * 2
    },
    {
    image: "pikachu.png",
    name: "Pikachu",
    type: "Electric",
    hp: Math.floor((Math.random() * 30) + 1),
    attack: Math.floor((Math.random() * 10) + 1),
    defense: Math.floor((Math.random() * 10) + 1)
    }
]

random = pokemonArray[Math.floor(Math.random() * (pokemonArray.length -1))];
opponentDiv.innerHTML = `<p>HP: ${random.hp}</p>`;
opponentImage = new Image();
opponentImage.src = path + random.image;
opponentImage.alt = random.name;
opponentDiv.appendChild(opponentImage);


const pikachu = pokemonArray[3];    
pikachuDiv.innerHTML = `<p>HP: ${pikachu.hp}</p>`;
const pikachuImage = new Image();
pikachuImage.src = path + pikachu.image;
pikachuImage.alt = pikachu.name;
pikachuDiv.appendChild(pikachuImage);



