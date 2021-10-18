<template>
  <div class="Index">
    <FlexBox :padding="false">
      <Calendar />
      <CalendarController />
    </FlexBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import FlexBox from '@/components/Atoms/FlexBox.vue'

import Calendar from '@/components/Organisms/CalendarBase.vue'
import CalendarController from '@/components/Organisms/CalendarController.vue'

export default defineComponent({
  name: 'CalendarView',
  components: {
    FlexBox,
    Calendar,
    CalendarController
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
  padding-left: 20px;
  background: none;
}

.todayBtn {
  margin-right: 20px;
}
</style>
