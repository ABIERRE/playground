import { ActionContext } from 'vuex'

type CalenderState = {
  date: number
}

type CalenderContext = ActionContext<CalenderState, null>

export default {
  namespaced: true,
  state (): CalenderState {
    return {
      date: 0
    }
  },
  mutations: {
    setDate (state: CalenderState, d: number): void {
      state.date = d
    }
  },
  actions: {
    setDate (ctx: CalenderContext, d: number): void {
      ctx.commit('setDate', d)
    }
  },
  getters: {
    getDate: (state: CalenderState) => (): number => {
      return state.date || 0
    }
  }
}
