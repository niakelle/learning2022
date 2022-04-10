const button = document.querySelector('.get-new');
const url = "https://pokeapi.co/api/v2/";
const getPokemonsUrl = url + "pokemon?limit=5&offset=0";

fetch(getPokemonsUrl)
	.then(function (response) {
		console.log('response', response);
		response.json().then(function (data) {
			console.log('data', data);
		})
	})

async function requestPokemons (event) {
	event.preventDefault();
	console.log('click');
}

button.addEventListener("click", requestPokemons);