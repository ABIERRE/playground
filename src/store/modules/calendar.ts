import { ActionContext } from 'vuex'

type CalendarState = {
  date: number,
  dateStr: string
}

type CalendarContext = ActionContext<CalendarState, null>

const getDateStr = (sd: number): string => {
  const dt = new Date(sd)
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth() + 1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  const day = dt.getDay()
  const dayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]
  return y + '.' + m + '.' + d + ' ( ' + dayStr + ' )'
}

export default {
  namespaced: true,
  state (): CalendarState {
    return {
      date: +new Date(),
      dateStr: getDateStr(+new Date())
    }
  },
  mutations: {
    setDate (state: CalendarState, d: number): void {
      state.date = d
    },
    setDateStr (state: CalendarState, sd: number): void {
      state.dateStr = getDateStr(sd)
    }
  },
  actions: {
    setDate (ctx: CalendarContext, d: number): void {
      ctx.commit('setDate', d)
      ctx.commit('setDateStr', d)
    }
  },
  getters: {
    getDate: (state: CalendarState) => (): number => {
      return state.date || 0
    },
    getDateStr: (state: CalendarState) => (): string => {
      return state.dateStr || ''
    }
  }
}
