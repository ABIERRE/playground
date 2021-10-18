import { createStore } from 'vuex'
import system from '@/store/modules/system'
import calendar from '@/store/modules/calendar'

export default createStore({
  modules: {
    system,
    calendar
  }
})
