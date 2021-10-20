<template>
  <div class="CalendarController">
    <VerticalInOut
      :delay="150"
    >
      <div v-show="isPage">
        <TodayBtn />
        <DateText />
      </div>
    </VerticalInOut>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import TodayBtn from '@/components/Molecules/TodayBtn.vue'
import DateText from '@/components/Molecules/DateText.vue'
import VerticalInOut from '../Transition/VerticalInOut.vue'

export default defineComponent({
  name: 'CalendarController',
  components: {
    TodayBtn,
    DateText,
    VerticalInOut
  },
  setup () {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return { isPage }
  }
})
</script>

<style scoped>
.CalendarController {
  width: 0 auto;
  height: 0 auto;
  background: none;
  margin-left: 20px;
}

@media screen and (max-width: 601px) {
  .CalendarController {
    margin-top: 20px;
    margin-left: 0px;
  }
}
</style>
