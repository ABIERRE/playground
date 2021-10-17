<template>
  <div class="Header">
    <MainTitle :text="route.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainTitle from '@/components/Atoms/MainTitle.vue'

export default defineComponent({
  name: 'Header',
  components: {
    MainTitle
  },
  setup () {
    const route = useRoute()
    watch(() => route.path, () => {
      console.log('header route watcher => ', route.path)
    })

    return { route }
  }
})
</script>

<style scoped>
.Header {
  padding-left: 20px;
  font-size: 30px;
}
</style>
