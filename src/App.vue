<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide('menuVisible', menuVisible);

    router.afterEach(() => {
      const width = document.documentElement.clientWidth;
      if (width < 500) {
        menuVisible.value = false
      }
    })

    window.addEventListener('resize', () => {
      const width = document.documentElement.clientWidth;
      if (width > 500) {
        menuVisible.value = true
      } else {
        menuVisible.value = false
      }
    })
  }
}
</script>
