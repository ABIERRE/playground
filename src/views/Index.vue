<template>
  <div class="Index">
    <Calender v-model="state.date"/>

    <BtnVue class="todayBtn" text="Today" @click="setToday"/>

    <div class="targetContainer">
      <div class="Label">Target Date: </div>
      <div class="Content">{{ new Date(state.date) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Calender from '@/components/Organisms/Calender.vue'
import BtnVue from '@/components/Atoms/Btn.vue'

type IndexState = {
  date: number,
  test: string
}

export default defineComponent({
  name: 'Home',
  components: {
    Calender,
    BtnVue
  },
  setup () {
    const state: IndexState = reactive({
      date: +new Date(),
      test: 'test'
    })

    const setToday = (): void => {
      state.date = +new Date()
    }

    return {
      state,
      setToday
    }
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

.targetContainer {
  margin-top: 20px;
  letter-spacing: 1px;
}

.todayBtn {
  margin-top: 20px;
}

.Label {
  font-size: 20px;
  line-height: 40px;;
}
.Content {
  font-size: 11px;
  line-height: 30px;;
}
</style>
