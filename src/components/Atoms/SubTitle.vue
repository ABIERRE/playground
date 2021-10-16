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
  width: 0 auto;
  height: 40px;
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 30px;
  background: none;
  padding: 5px 5px;
  margin-top: 10px;
}
</style>
