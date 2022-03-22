const button = document.querySelector('.cats__button');
const image = document.querySelector('.cats__image');
const url = 'https://api.thecatapi.com/v1/images/search';

async function fetchHandler() {
	try {
		const response = await fetch(url);

		const data = await response.json();
		console.log(data);
		image.src = data[0].url;
	}	catch (error) {
		console.log(error);
	}
}

button.addEventListener('click', function () {
	let isLoaded = image.complete;

	if (isLoaded) {
		fetchHandler();
	}
})