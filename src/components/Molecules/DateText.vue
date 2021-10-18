<template>
  <SubTitle :text="dateStr" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import SubTitle from '@/components/Atoms/SubTitle.vue'

export default defineComponent({
  name: 'DateText',
  components: {
    SubTitle
  },
  setup () {
    const store = useStore()
    const dateStr = computed(() => store.getters['calendar/getDateStr']())
    return { dateStr }
  }
})
</script>
