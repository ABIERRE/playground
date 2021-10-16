<template>
  <div class="IndexController">
    <TodayBtn />
    <SubTitle
      text="Target Date: "
    />
    <DateText />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SubTitle from '@/components/Atoms/SubTitle.vue'
import FlexBox from '@/components/Atoms/FlexBox.vue'
import TodayBtn from '@/components/Molecules/TodayBtn.vue'
import DateText from '@/components/Molecules/DateText.vue'

export default defineComponent({
  name: 'IndexController',
  components: {
    SubTitle,
    FlexBox,
    TodayBtn,
    DateText
  }
})
</script>

<style scoped>
.IndexController {
  width: 0 auto;
  height: 0 auto;
  background: none;
  margin-left: 20px;
}

</style>
