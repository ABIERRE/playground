<template>
  <div class="SubTitle">{{ text }}</div>
</template>

<script lang="ts">
export default {
  name: 'SubTitle',
  props: {
    text: {
      type: String,
      required: false,
      default: 'SubTitle'
    }
  }
}
</script>

<style scoped>
.SubTitle {
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 30px;
}
</style>
