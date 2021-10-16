<template>
  <div class="CalenderBase">
    <Pop>
      <Calender />
    </Pop>
  </div>
</template>

<script lang="ts">
import Pop from '@/components/Transition/Pop.vue'
import Calender from '@/components/Molecules/Calender.vue'

import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'CalenderBase',
  components: {
    Calender,
    Pop
  }
})
</script>
