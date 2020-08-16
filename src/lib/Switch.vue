<template>
    <div>
        <button :class="{checked:value}" @click="toggle">
            <span></span>
        </button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const checked = ref(false)
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {checked, toggle}
    }
}
</script>


<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
    position: relative;
    height: $h;
    width: $h * 2;
    border: none;
    background-color: gray;
    border-radius: $h / 2;

    > span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background-color: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }

    &.checked {
        background-color: #1890ff;

        > span {
            left: calc(100% - 20px);
        }
    }
    &:focus {
        outline: none;
    }
    &:active span {
        width: $h2 + 4px
    }
    &.checked:active {
        > span { 
        width: $h2 + 4px; 
        margin-left: -4px; }
    }
}



</style>
