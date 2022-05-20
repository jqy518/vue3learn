<script lang="ts" setup>
import { debounce } from 'lodash-es'
import { reactive, ref } from 'vue'
const zs = reactive({ name: 'zhangsan', age: '55' })
const sdiv = ref('')
const scrollFun = debounce(event => {
  console.log(event)
}, 300)
</script>
<template>
  <div
    ref="sdiv"
    style="width: 100%; height: 200px; overflow-y: auto"
    @scroll="scrollFun"
  >
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
    <h1>this is About Page....{{ zs.name }}</h1>
  </div>
</template>
