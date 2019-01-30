const pikachu = document.querySelector(".pikachu");
const opponent = document.querySelector(".opponent");
const path = "assets/images/"
const pokemonArray = [ 
    {
    image: "charmander.png",
    name: "Charmander",
    type: "Fire"
    },
    { 
    image: "squirtle.png",
    name: "Squirtle",
    type: "Water"
    },
    {
    image: "bulbasaur.png",
    name: "Bulbasaur",
    type: "Grass"
    }
]

function randomOpponent(){
    random = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
   
   const image = new Image();
   image.src = path + random.image;
   image.alt = "Pokemon"
   opponent.appendChild(image);

   opponentType = random.type;
   let attackStat = 0;
   let defenseStat = 0;

   switch (opponentType) {
       case "Fire":
        attackStat = Math.floor((Math.random() * 10) + 1);
        defenseStat = Math.floor((Math.random() * 10) + 1) * 2;
        break;

        case "Water": 
        attackStat = Math.floor((Math.random() * 10) + 1) * .5;
        defenseStat = Math.floor((Math.random() * 10) + 1) * .5;
        break;

        case "Grass":
        attackStat = Math.floor((Math.random() * 10) + 1);
        defenseStat = Math.floor((Math.random() * 10) + 1) * 2;
        break;

        default:
        console.log("Error");
    }

    console.log(attackStat + "" + " " + defenseStat);

}



randomOpponent();