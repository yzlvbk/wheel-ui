<template>
  <div>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
      <Button
        @click="onClick"
        size="size"
        @focus="onClick"
      >你好1</Button>
      <Button theme="button">你好2</Button>
      <Button theme="link">你好3</Button>
      <Button theme="text">你好4</Button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick,
    }
  },
}
</script>
