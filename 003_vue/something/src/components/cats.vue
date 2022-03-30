<template>
	<section class="cats">
		<h2 class="cats__heading">Cats api</h2>
		<img src="img/cat.jpg" alt="cat" class="cats__image">
		<button class="cats__button">New cat</button>
	</section>
</template>

<script>
export default {
	let button = document.querySelector('.cats__button');
	let image = document.querySelector('.cats__image');
	let url = 'https://api.thecatapi.com/v1/images/search';

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
}
</script>

<style>
.main {
	padding-top: 15px;
}

.cats {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px;
	background-color: #fff;
	border: 1px solid black;
	max-width: 800px;
	margin: 0 auto;
	box-shadow: 5px 5px 25px grey;
	box-sizing: border-box;
	padding: 0 100px;
}

.cats__heading {
	margin: 20px 0 20px 0;
	font-size: 30px;
	font-weight: bold;
}

.cats__image {
	width: 100%;
	height: auto;
	max-width: 600px;
	max-height: 800px;
}

.cats__button {
	margin-top: 10px;
	padding: 10px 15px;
	font-size: 20px;
	margin-bottom: 10px;
}
</style>