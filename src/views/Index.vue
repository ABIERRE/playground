<template>
  <div class="Index">
    <div class="IndexTitle">Calender Demo</div>
    <Calender v-model="state.date"/>

    <BtnVue class="todayBtn" text="Today" @click="setToday"/>

    <div class="targetContainer">
      <div class="Label">Target Date: </div>
      <div class="Content">{{ getFormattedDate() }}</div>
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

    const getFormattedDate = (): string => {
      const dt = new Date(state.date)
      const y = dt.getFullYear()
      const m = ('00' + (dt.getMonth() + 1)).slice(-2)
      const d = ('00' + dt.getDate()).slice(-2)
      const day = dt.getDay()
      const dayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]
      return y + '.' + m + '.' + d + ' ( ' + dayStr + ' )'
    }

    return {
      state,
      setToday,
      getFormattedDate
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

.IndexTitle {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 40px;
  letter-spacing: 3px;
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
