<template>
  <div class="MainTitle">{{ text }}</div>
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
  margin-bottom: 40px;
  letter-spacing: 3px;
}
</style>
