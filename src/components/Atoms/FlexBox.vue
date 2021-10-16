<template>
  <div
    class="FlexBox"
    :style="'padding:' + (padding ? '20px' : '0px')"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'FlexBox',
  props: {
    padding: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style scoped>
.FlexBox {
  width: 0 auto;
  height: 0 auto;
  padding: 20px;
  background: none;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 601px) {
  .FlexBox {
    display: block;
  }
}

</style>
