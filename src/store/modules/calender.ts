import { ActionContext } from 'vuex'

type CalenderState = {
  date: number,
  dateStr: string
}

type CalenderContext = ActionContext<CalenderState, null>

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
  state (): CalenderState {
    return {
      date: +new Date(),
      dateStr: getDateStr(+new Date())
    }
  },
  mutations: {
    setDate (state: CalenderState, d: number): void {
      state.date = d
    },
    setDateStr (state: CalenderState, sd: number): void {
      state.dateStr = getDateStr(sd)
    }
  },
  actions: {
    setDate (ctx: CalenderContext, d: number): void {
      ctx.commit('setDate', d)
      ctx.commit('setDateStr', d)
    }
  },
  getters: {
    getDate: (state: CalenderState) => (): number => {
      return state.date || 0
    },
    getDateStr: (state: CalenderState) => (): string => {
      return state.dateStr || ''
    }
  }
}
