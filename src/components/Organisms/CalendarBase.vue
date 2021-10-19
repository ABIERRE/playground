<template>
  <div class="CalendarBase">
    <VerticalInOut :delay="50">
      <Calendar v-show="isPage" />
    </VerticalInOut>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import VerticalInOut from '../Transition/VerticalInOut.vue'
import Calendar from '@/components/Molecules/Calendar.vue'

import {
  computed,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'CalendarBase',
  components: {
    Calendar,
    VerticalInOut
  },
  setup () {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return { isPage }
  }
})
</script>
