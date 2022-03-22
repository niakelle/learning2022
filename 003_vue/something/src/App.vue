<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <testComponent message="something BIG"/>
  <testVFor/>
</template>

<script>

import testComponent from './components/testComponent.vue';
import testVFor from './components/testVFor.vue';


export default {
  name: 'App',
  components: {
    testComponent,
    testVFor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
