<template>
    <button class="wm-button" :class="buttonStyle"><slot></slot></button>
</template>
<script lang="ts" setup>
  import './style/index.less'
  import { computed } from "vue";
  // @ts-ignore
  defineOptions({ name: "wm-button" });

  type ButtonProps = {
    type?: string;
  };
  // @ts-ignore
  const buttonProps = defineProps<ButtonProps>();
  const buttonStyle = computed(() => {
    return { [`wm-button--${buttonProps.type}`]: buttonProps.type };
  });
</script>

