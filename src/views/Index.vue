<template>
  <div class="Index">
    <MainTitle text="Calender Demo" />

    <FlexBox :padding="false">
      <Calender />
      <IndexController />
    </FlexBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainTitle from '@/components/Atoms/MainTitle.vue'
import FlexBox from '@/components/Atoms/FlexBox.vue'

import Calender from '@/components/Organisms/CalenderBase.vue'
import IndexController from '@/components/Organisms/IndexController.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Calender,
    MainTitle,
    FlexBox,
    IndexController
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
