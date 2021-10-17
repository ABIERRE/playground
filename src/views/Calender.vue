<template>
  <div class="Index">
    <FlexBox :padding="false">
      <Calender />
      <CalenderController />
    </FlexBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import FlexBox from '@/components/Atoms/FlexBox.vue'

import Calender from '@/components/Organisms/CalenderBase.vue'
import CalenderController from '@/components/Organisms/CalenderController.vue'

export default defineComponent({
  name: 'CalenderView',
  components: {
    FlexBox,
    Calender,
    CalenderController
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

.todayBtn {
  margin-right: 20px;
}
</style>
