import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'destyle.css'

const app = createApp(App)

app.config.performance = true
app.config.warnHandler = () => undefined
app.config.errorHandler = () => undefined

const isDevelopment = false
if (!isDevelopment) {
  console.log = () => { return false }
  console.warn = () => { return false }
  console.error = () => { return false }
  console.debug = () => { return false }
  console.info = () => { return false }
  console.dir = () => { return false }
  console.dirxml = () => { return false }
  console.group = () => { return false }
  console.groupCollapsed = () => { return false }
  console.groupEnd = () => { return false }
  console.table = () => { return false }
  console.time = () => { return false }
  console.timeEnd = () => { return false }
  console.timeStamp = () => { return false }
  console.trace = () => { return false }
}

app.use(store).use(router).mount('#app')
