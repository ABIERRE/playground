<template>
  <div class="CalendarBase">
    <Pop>
      <Calendar v-show="isPage" />
    </Pop>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import Pop from '@/components/Transition/Pop.vue'
import Calendar from '@/components/Molecules/Calendar.vue'

import {
  computed,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'CalendarBase',
  components: {
    Calendar,
    Pop
  },
  setup () {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return { isPage }
  }
})
</script>
