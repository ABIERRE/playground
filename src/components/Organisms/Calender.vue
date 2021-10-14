<template>
  <div class="Calender">
    <div class="CalenderContainer">
      <Icon class="nIcon prev" :src="larrow" @click="prev" />
      <div class="CalenderHead">{{ state.dispDate }}</div>
      <Icon class="nIcon ff" :src="rarrow" @click="ff" />
      <div
        class="CalenderHeadRow"
      >
        <div><div class="dayHead">Mon</div></div>
        <div><div class="dayHead">Tue</div></div>
        <div><div class="dayHead">Wed</div></div>
        <div><div class="dayHead">Thu</div></div>
        <div><div class="dayHead">Fri</div></div>
        <div><div class="dayHead">Sat</div></div>
        <div><div class="dayHead">Sun</div></div>
      </div>
      <div
        class="CalenderRow"
        v-for="row in 6"
        :key="row"
      >
        <div
          v-for="i in 7"
          :key="i"
        >
          <div
            :class="getDayColor(i + ((row - 1) * 7))"
            @click="setDate(rendarDate(i + ((row - 1) * 7)))"
          >
            <div class="CalenderDate">{{ rendarDate(i + ((row - 1) * 7)) }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import Icon from '@/components/Atoms/Icon.vue'

import larrow from '@/assets/larrow.svg'
import rarrow from '@/assets/rarrow.svg'

import {
  reactive,
  onMounted,
  computed,
  watchEffect,
  defineComponent
} from 'vue'

type CalenderState = {
  dispDate: string,
  date: number,
  y: number,
  m: number,
  d: number,
  day: number,
  dayStr: string,
  dayStart: number,
  dateMax: number
}

export default defineComponent({
  name: 'Calender',
  components: {
    Icon
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: +new Date()
    }
  },
  setup (props, ctx) {
    const store = useStore()

    const state: CalenderState = reactive({
      dispDate: '',
      date: +new Date(),
      y: 0,
      m: 0,
      d: 0,
      day: 0,
      dayStr: '',
      dayStart: 0,
      dateMax: 0
    })

    const tdate = computed({
      get: () => props.modelValue,
      set: v => ctx.emit('update:modelValue', v)
    })

    state.date = +props.modelValue || +new Date()

    const target = reactive({
      y: 0,
      m: 0,
      d: 0,
      day: 0,
      dayStr: ''
    })

    state.y = new Date().getFullYear()
    state.m = new Date().getMonth() + 1

    const setDispDate = (): string => state.y + '.' + state.m

    const setDate = (date?: number): void => {
      if (date === undefined) return
      const d = +new Date(state.y, state.m - 1, date, 0, 0, 0)
      console.log(date)
      tdate.value = d
    }

    const initCalender = () => {
      const dt = new Date(tdate.value)
      const y = dt.getFullYear()
      const m = dt.getMonth()
      const d = dt.getDate()

      const H = dt.getHours()
      const M = dt.getMinutes()
      const S = dt.getSeconds()

      const day = dt.getDay()
      const dayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]

      const st = new Date(state.y, state.m - 1, 1)
      const ed = new Date(state.y, state.m, 0)

      const dayStart = st.getDay()
      const dateMax = ed.getDate()

      console.log(y, m, d, day, H, M, S)

      target.y = y
      target.m = m
      target.d = d
      target.day = day
      target.dayStr = dayStr

      state.dateMax = dateMax
      state.dayStart = dayStart

      state.dispDate = setDispDate()
    }

    watchEffect(() => {
      initCalender()
    })

    const rendarDate = (i: number): string => {
      const d = i - (state.dayStart) + 1
      return d > 0 && d <= state.dateMax ? d + '' : ''
    }

    const diffDate = (d: number): boolean => {
      if (target.y !== state.y) return false
      if (target.m + 1 !== state.m) return false
      return target.d === d - state.dayStart + 1
    }

    const getDayColor = (i: number): string => {
      const cd = rendarDate(i)
      const bool = cd === ''
      if (cd === '0') return 'blankDayBox'
      if (bool) return 'dayBox'
      if (diffDate(i)) return 'dayBox tdate'
      if (i === 6) return 'dayBox sat'
      if (i % 7 === 6) return 'dayBox sat'
      if (i % 7 === 0) return 'dayBox sun'
      return 'dayBox'
    }

    const prev = () => {
      const dt = new Date(state.y, state.m - 1, 1)
      dt.setMonth(dt.getMonth() - 1)
      console.log('after, prev', dt)
      state.y = dt.getFullYear()
      state.m = dt.getMonth() + 1
    }

    const ff = () => {
      const dt = new Date(state.y, state.m - 1, 1)
      dt.setMonth(dt.getMonth() + 1)
      console.log('after, prev', dt)
      state.y = dt.getFullYear()
      state.m = dt.getMonth() + 1
    }

    const isPage = computed(() => store.getters['system/isPage']())

    onMounted(() => {
      console.log('mounted Calender', +new Date())
    })

    return {
      state,
      target,
      isPage,
      rendarDate,
      getDayColor,
      setDate,
      larrow,
      rarrow,
      prev,
      ff
    }
  }
})
</script>

<style scoped>
.Calender {
  width: 260px;
  height: 230px;
  overflow: scroll;
  box-shadow: 3px 3px 5px 0px #00000021;
  background: #eee;
  padding: 10px;
  overflow: hidden;
  border-radius: 5px;
  user-select: none;
}

.CalenderContainer {
  position: relative;
  width: inherit;
  height: inherit;
}

.CalenderHead {
  background: #fafafa;
  width: 151px;
  height: 30px;
  padding: 6px;
  letter-spacing: 1px;
  text-align: center;
  margin-left: 44px;
  border-radius: 5px;
  user-select: none;
  text-shadow: 3px 3px 3px #ddd;
}

.prev {
  position: absolute;
  top: 0px;
  left: 0px;
}

.ff {
  position: absolute;
  top: 0px;
  right: 20px;
}

.nIcon:hover {
  background: #ffffaaaa;
  transform: scale(0.98, 0.98);
  transition-property: transform, box-shadow;transition-duration: 0.3s;transition-delay: 0;
}

.nIcon:active {
  box-shadow: -1px -1px 1px #FFF9F9 inset, 1px 1px 2px 0px #00000018 inset;
}

.CalenderHeadRow {
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  height: 20px;
  margin-top: 5px;
}
.CalenderRow {
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  height: 20px;
  margin-top: 5px;
}

.dayHead {
  position: relative;
  width: 30px;
  height: 20px;
  background: #fff;
  padding: 5px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 9px;
  text-align: center;
  letter-spacing: 1px;
  user-select: none;
  text-shadow: 3px 3px 3px #ddd;
}

.dayBox {
  position: relative;
  width: 30px;
  height: 20px;
  background: #ffffff;
  padding: 5px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

.dayBox:hover {
  background: #ffffaaaa;
  transform: scale(0.98, 0.98);
  transition-property: transform, box-shadow;transition-duration: 0.3s;transition-delay: 0;
}

.dayBox:active {
  box-shadow: -1px -1px 1px #FFF9F9 inset, 1px 1px 2px 0px #00000018 inset;
}

.dayBoxItem {
  width: 100%;
  height: 30px;
  background: #fafafa;
  padding: 10px;
  margin-bottom: 1px;
}

.blankDayBox {
  position: relative;
  width: 30px;
  height: 20px;
  background: #ffffff88;
  padding: 5px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 10px;
}

.CalenderDate {
  display: block;
  color: #444;
  text-align: center;
}

.sat {
  background: #aaddffee;
}

.sun {
  background: #ffaaaaee;
}

.exp {
  background: #fafafa77;
}

.tdate {
  background: #aaffaaaa;
  box-shadow: 0px 0px 7px 2px #fff inset;
}

.separater {
  display: block;
  width: inherit;
  height: 1px;
  background: #000;
}
</style>
