<template>
  <div class="Index">
    <div class="IndexTitle">Calender Demo</div>
    <Calender />

    <BtnVue class="todayBtn" text="Today" @click="setToday"/>

    <div class="targetContainer">
      <div class="Label">Target Date: </div>
      <div class="Content">{{ getFormattedDate() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Calender from '@/components/Organisms/CalenderBase.vue'
import BtnVue from '@/components/Atoms/Btn.vue'

import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    Calender,
    BtnVue
  },
  setup () {
    const store = useStore()
    const setToday = (): void => {
      store.dispatch('calender/setDate', +new Date())
    }
    setToday()

    const sd = computed(() => store.getters['calender/getDate']())
    const getFormattedDate = (): string => {
      const dt = new Date(sd.value)
      const y = dt.getFullYear()
      const m = ('00' + (dt.getMonth() + 1)).slice(-2)
      const d = ('00' + dt.getDate()).slice(-2)
      const day = dt.getDay()
      const dayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]
      return y + '.' + m + '.' + d + ' ( ' + dayStr + ' )'
    }

    return {
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
