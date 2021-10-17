<template>
  <div class="CalenderController">
    <VerticalInOut>
      <TodayBtn v-show="isPage"/>
    </VerticalInOut>

    <VerticalInOut
      :delay="500"
    >
      <DateText
        v-show="isPage"
      />
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
  name: 'CalenderController',
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
.CalenderController {
  width: 0 auto;
  height: 0 auto;
  background: none;
  margin-left: 20px;
}

@media screen and (max-width: 601px) {
  .CalenderController {
    margin-top: 20px;
    margin-left: 0px;
  }
}
</style>
