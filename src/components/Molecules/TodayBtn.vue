<template>
  <Btn
   class="todayBtn"
   text="Today"
   @click="setToday"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Btn from '@/components/Atoms/Btn.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    Btn
  },
  setup () {
    const store = useStore()
    const setToday = (): void => {
      store.dispatch('calender/setDate', +new Date())
    }

    return {
      setToday
    }
  }
})
</script>

<style scoped>
.Index {
  width: 0 auto;
  height: 0 auto;
  padding: 20px;
  background: #fff;
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
