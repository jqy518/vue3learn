<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const countVal = ref(0)
</script>

<template>
  <h1>{{ msg }}{{ countVal }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
