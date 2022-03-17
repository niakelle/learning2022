<template>
	<div class="test-wrapper">
		<h1>{{ message }}</h1>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default ({
	name: 'testComponent',
	props: {
		message: String
	}
})

</script>

<style scoped>
	h1 {
		color: red;
		font-size: 50px;
	}
	.test-wrapper {
		border: 3px solid black;
	}
</style>