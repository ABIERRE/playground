import { createStore } from 'vuex'
import system from '@/store/modules/system'
import calender from '@/store/modules/calender'

export default createStore({
  modules: {
    system,
    calender
  }
})
