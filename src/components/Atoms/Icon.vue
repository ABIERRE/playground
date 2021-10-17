<template>
  <div
    class="IconBase"
    :style="'width: ' + size * 1.5 + 'px; height: ' + size * 1.5 + 'px;' + 'margin-top: ' + size / 2 + 'px;'"
  >
    <img
      class="Icon"
      :src="src"
      :style="'width: ' + size + 'px; height: ' + size + 'px;'"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconBase',
  props: {
    text: String,
    src: String,
    size: {
      type: Number,
      required: false,
      default: 20
    }
  }
})
</script>
<style scoped>
.IconBase {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(165deg, #fafafa, #efefef);
  padding-top: 5px;
  user-select: none;
}
.Icon {
  display: block;
  padding: 0;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
}
</style>
