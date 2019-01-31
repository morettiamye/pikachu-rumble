const pikachuDiv = document.querySelector(".pikachu");
const pikachuHP = document.querySelector(".pikachu-hp")
const opponentDiv = document.querySelector(".opponent");
const opponentHP = document.querySelector(".opponent-hp")

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
opponentHP.innerHTML = `<p>HP: ${random.hp}</p>`;
opponentImage = new Image();
opponentImage.src = path + random.image;
opponentImage.alt = random.name;
opponentDiv.appendChild(opponentImage);

console.log(random.hp);


const pikachu = pokemonArray[3];    
pikachuHP.innerHTML = `<p>HP: ${pikachu.hp}</p>`;
const pikachuImage = new Image();
pikachuImage.src = path + pikachu.image;
pikachuImage.alt = pikachu.name;
pikachuDiv.appendChild(pikachuImage);

const pokemonDiv = document.querySelector(".pokemon");
const attackButton = document.querySelector(".attack");
const resetButton = document.querySelector(".reset");

function attack(){
    random.hp = (random.hp - pikachu.attack);
    pikachu.hp = (pikachu.hp - random.attack);

    pikachuHP.innerHTML = `<p>HP: ${pikachu.hp}</p>`;
    opponentHP.innerHTML = `<p>HP: ${random.hp}</p>`;

    checkStatus();

}

function checkStatus(){
    if (pikachu.hp <= 0) {
        pokemonDiv.innerHTML = "<p>You lose</p>";
    } else if (random.hp <= 0) {
        pokemonDiv.innerHTML = "<p>You win!</p>";
    }
}

function reload(){
    location.reload(true);
}

attackButton.addEventListener("click", attack);
resetButton.addEventListener("click", reload);


