<template>
  <div class="Index">
    <MainTitle text="Calender Demo" />

    <FlexBox :padding="false">
      <Calender />
      <FlexBox>
        <TodayBtn />
        <SubTitle
          text="Target Date: "
        />
        <DateText />
      </FlexBox>
    </FlexBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calender from '@/components/Organisms/CalenderBase.vue'
import MainTitle from '@/components/Atoms/MainTitle.vue'
import SubTitle from '@/components/Atoms/SubTitle.vue'

import FlexBox from '@/components/Atoms/FlexBox.vue'
import TodayBtn from '@/components/Molecules/TodayBtn.vue'
import DateText from '@/components/Molecules/DateText.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Calender,
    MainTitle,
    SubTitle,
    FlexBox,
    TodayBtn,
    DateText
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
