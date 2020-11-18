<template>
<div>
  <Switch v-model:value="boolean" />
</div>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue';
export default {
  components: {
    Switch
  },

  setup() {
    const boolean = ref(false)
    return {
      boolean
    }
  }
}
</script>
