<template>
  <div>
    <Demo
      title="基本用法"
      description="开关按钮的基本用法"
      :component="SwitchDemo"
    />
  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import SwitchDemo from '../../../demo-code/SwitchDemo.vue'
import {
  ref
} from 'vue';
export default {
  components: {
    Demo
  },

  setup() {
    return {
      SwitchDemo
    }
  }
}
</script>
