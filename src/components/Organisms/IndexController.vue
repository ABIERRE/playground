<template>
  <div class="IndexController">
    <Pop>
    <TodayBtn v-show="isPage"/>
    </Pop>

    <Pop>
      <SubTitle
        v-show="isPage"
        text="Target Date: "
      />
    </Pop>
    <Pop>
      <DateText
        v-show="isPage"
      />
    </Pop>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import SubTitle from '@/components/Atoms/SubTitle.vue'
import TodayBtn from '@/components/Molecules/TodayBtn.vue'
import DateText from '@/components/Molecules/DateText.vue'
import Pop from '../Transition/Pop.vue'

export default defineComponent({
  name: 'IndexController',
  components: {
    SubTitle,
    TodayBtn,
    DateText,
    Pop
  },
  setup () {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return { isPage }
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

@media screen and (max-width: 601px) {
  .IndexController {
    margin-top: 20px;
    margin-left: 0px;
  }
}
</style>
