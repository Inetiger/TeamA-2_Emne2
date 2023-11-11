let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "/Projects/PokemonObjekt/Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "/Projects/PokemonObjekt/Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "/Projects/PokemonObjekt/Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "/Projects/PokemonObjekt/Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon;

let player = {
  name: "Bjarne",
  image: "/Projects/PokemonObjekt/Images/pokemonTrainerIdle.png",
  pokemon: [],
}

let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name} </div>
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemonView()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemonView()">Vis dine pokemon</button>       
          </div>
  </div>
  `;
}

function showPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du har fanget</h1>
    <div class="pokemonNames">
      <ol>
        ${showPokemonList()}
      </ol>
    </div>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>      
          </div>
  </div>
  `;
}

function showPokemonList() {
  let html = '';
  for (let noe of player.pokemon) {
    html += `
    <li>${noe.name}</li>
    `
  }
  return html;
}

function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
