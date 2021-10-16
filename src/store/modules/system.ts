import { ActionContext } from 'vuex'

type StringKeyObject = {
  [key: string]: boolean
}

type SystemState = {
  hidden: boolean,
  route: string,
  page: StringKeyObject,
  x: number,
  y: number,
}

type xyData = {
  x: number,
  y: number
}

type SystemContext = ActionContext<SystemState, null>

export default {
  namespaced: true,
  state (): SystemState {
    return {
      hidden: false,
      route: '',
      page: {},
      x: 0,
      y: 0
    }
  },
  mutations: {
    setXY (state: SystemState, d: xyData): void {
      state.x = d.x
      state.y = d.y
    },
    setHidden (state: SystemState, bool: boolean): void {
      state.hidden = bool
      console.log('isHidden ? : ', state.hidden)
    },
    setRoute (state: SystemState, route: string): void {
      state.route = route
      console.log('state.route', state.route)
    },
    setPage (state: SystemState, bool: boolean): void {
      const key = state.route as keyof StringKeyObject
      state.page[key] = bool
      console.log('target state.page: ' + state.route, state.page[key])
    }
  },
  actions: {
    setXY (ctx: SystemContext, d: xyData): void {
      ctx.commit('setXY', d)
    },
    setHidden (ctx: SystemContext, bool: boolean): void {
      ctx.commit('setHidden', bool)
    },
    setRoute (ctx: SystemContext, route: string): void {
      ctx.commit('setRoute', route)
    },
    setPage (ctx: SystemContext, bool: boolean): void {
      ctx.commit('setPage', bool)
    }
  },
  getters: {
    getX: (state: SystemState) => (): number => {
      return state.x | 0
    },
    getY: (state: SystemState) => (): number => {
      return state.y | 0
    },
    isHidden: (state: SystemState) => (): boolean => {
      return state.hidden
    },
    getRoute: (state: SystemState) => (): string => {
      return state.route
    },
    isPage: (state: SystemState) => (): boolean => {
      return state.page[state.route]
    }
  }
}
