<template>
  <div class="Index">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'IndexView',
  components: {
  },
  setup () {
    const store = useStore()
    onMounted(() => {
      store.dispatch('system/setPage', true)
    })
  }
})
</script>

<style scoped>
.Index {
  width: 0 auto;
  height: 0 auto;
  padding: 20px;
  background: #fcfcfc;
}

.IndexTitle {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 40px;
  letter-spacing: 3px;
}

.todayBtn {
  margin-right: 20px;
}
</style>
