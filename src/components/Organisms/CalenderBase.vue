<template>
  <div class="CalenderBase">
    <Pop>
      <Calender v-show="isPage" />
    </Pop>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import Pop from '@/components/Transition/Pop.vue'
import Calender from '@/components/Molecules/Calender.vue'

import {
  computed,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'CalenderBase',
  components: {
    Calender,
    Pop
  },
  setup () {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return { isPage }
  }
})
</script>
