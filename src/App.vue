<template>
  <router-link to="/">frank</router-link> |||<router-link to="/2">frank2</router-link>
  <router-view></router-view>
</template>

<script>
import Frank from './components/Frank.vue'

export default {
  name: 'App'
}
</script>
