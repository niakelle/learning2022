<template>
	<div>
		<ul class="users">
			<li v-for="(user, i) in users" :key="'u' + i">
				{{user.name}} - {{user.age}}
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'AppUsers',
	data(){
		return {
			users: [
				{name: "John", age: 17},
				{name: "Donnie", age: 24},
				{name: "Jack", age: 33},
			]
		}
	}
}

</script>

<style>
	.users {
		background-color: rgba(0,255,255,0.1);
		padding: 10px;
	}
	.users li{
		margin: 10px auto 0 auto;
		font-weight: bold;
		width: 50%;
		background-color: rgba(0,255,255,0.2);
		list-style: none;
	}
</style>