<template>
  <div class="MainTitle">
    <span v-if="text">{{ text }}</span>
    <slot v-else />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainTitle',
  props: {
    text: {
      type: String,
      required: false,
      default: 'MainTitle'
    }
  }
}
</script>

<style scoped>
.MainTitle {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 20px;
  letter-spacing: 2px;
}
</style>
