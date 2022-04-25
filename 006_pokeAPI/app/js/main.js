const button = document.querySelector('.get-new');
const url = "https://pokeapi.co/api/v2/";
const getPokemonsUrl = url + "pokemon?limit=5&offset=0";
const card = document.querySelector('.card');


async function requestPokemons (event) {
	event.preventDefault();

	let result;
	await fetch(getPokemonsUrl)
	.then(function (response) {
		if (response.status !== 200) {
			return Promise.reject(new Error (response.statusText));
		}
		return Promise.resolve(response);
	})
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log('data', data);
		result = data;
	})

	let image = getImage(result);

	card.insertAdjacentHTML('afterbegin', `
		<img src="${image}" alt="pokemon picture" class="card__img">
	`)
}


function getImage (object) {
	let url = object.results[0].url;
	fetch(url)
		.then(function (response) {
			if (response.status !== 200) {
				return Promise.reject(new Error (response.statusText));
			}
			return Promise.resolve(response);
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let calcs = data.sprites.other.official-artwork.front_default;
			console.log(calcs);
			return calcs
		})
}

// sprites > other > official-artwork > front_default

button.addEventListener("click", requestPokemons);