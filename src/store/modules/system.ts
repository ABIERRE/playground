import { ActionContext } from 'vuex'

type StringKeyObject = {
  [key: string]: boolean
}

type Route = {
  path: string,
  rname: string
}

type SysState = {
  hidden: boolean,
  route: Route,
  page: StringKeyObject,
  x: number,
  y: number,
}

type xyData = {
  x: number,
  y: number
}

type SysContext = ActionContext<SysState, null>

export default {
  namespaced: true,
  state (): SysState {
    return {
      hidden: false,
      route: {
        path: '',
        rname: ''
      },
      page: {},
      x: 0,
      y: 0
    }
  },
  mutations: {
    setXY: (state: SysState, d: xyData): void => {
      state.x = d.x
      state.y = d.y
    },
    setHidden: (state: SysState, bool: boolean): void => {
      state.hidden = bool
    },
    setRoute: (state: SysState, route: string): void => {
      state.route.path = route
    },
    setRouteName: (state: SysState, rname: string): void => {
      state.route.rname = rname
    },
    setPage: (state: SysState, bool: boolean): void => {
      const key = state.route.path as keyof StringKeyObject
      state.page[key] = bool
    }
  },
  actions: {
    setXY: (ctx: SysContext, d: xyData): void => ctx.commit('setXY', d),
    setHidden: (ctx: SysContext, bool: boolean): void => ctx.commit('setHidden', bool),
    setRoute: (ctx: SysContext, route: string): void => ctx.commit('setRoute', route),
    setRouteName: (ctx: SysContext, rname: string): void => ctx.commit('setRouteName', rname),
    setPage: (ctx: SysContext, bool: boolean): void => ctx.commit('setPage', bool)
  },
  getters: {
    getX: (state: SysState) => (): number => state.x | 0,
    getY: (state: SysState) => (): number => state.y | 0,
    isHidden: (state: SysState) => (): boolean => state.hidden,
    getRoute: (state: SysState) => (): Route => state.route,
    getRoutePath: (state: SysState) => (): string => state.route.path,
    getRouteName: (state: SysState) => (): string => state.route.rname,
    isPage: (state: SysState) => (): boolean => state.page[state.route.path]
  }
}
