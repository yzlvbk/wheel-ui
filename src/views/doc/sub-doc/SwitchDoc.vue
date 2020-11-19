<template>
  <div>
    <Demo
      title="基本用法"
      description="开关按钮的基本用法"
      :component="SwitchDemo"
    />
    <Attr
      :columns="columns"
      :data="data"
    />
  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import SwitchDemo from '../../../demo-code/switch-demo/SwitchDemo.vue'
import { columns } from '../../../utils/cloumn-config'
import {
  ref
} from 'vue';
export default {
  components: {
    Demo,
    Attr
  },

  setup() {
    const data = [
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return {
      SwitchDemo,
      data,
      columns
    }
  }
}
</script>
