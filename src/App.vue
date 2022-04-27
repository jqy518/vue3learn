<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {watchEffect} from 'vue'
import {useStore} from './store/MainStore'
import classes from './assets/main.module.css'
import {useRouter} from 'vue-router'
const router = useRouter();
const store = useStore()
console.log(router.resolve({
  name:'not-found',
  params:{pathMatch:['ffff','cccccc']}
}))
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
  <p :class="classes.red">AAAAAAA{{store.name}}</p>
</template>

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
