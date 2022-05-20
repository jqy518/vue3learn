<script setup>
import { reactive } from 'vue'
const info = reactive({ message: '暂无信息', status: '404' })
</script>
<template>
  <h1>{{ info.message }}-{{ info.status }}</h1>
</template>
