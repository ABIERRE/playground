<template>
  <div class="Header">
    <router-link to="/">
      <FlexBox :padding="false">
      <Icon
        :size="27"
        :src="homeIcon"
        v-show="route !== '/' && state.xy.x > 600"
      />
      <MainTitle class="MainTitle" :text="rname" />
      </FlexBox>
    </router-link>

    <Hio :delay="300" :length="60">
      <div class="route" v-show="route !== '/calender'">
        <router-link to="/calender">Calender</router-link>
      </div>
    </Hio>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import MainTitle from '@/components/Atoms/MainTitle.vue'
import Hio from '@/components/Transition/HorizontalInOut.vue'

import homeIcon from '@/assets/home.svg'
import Icon from '@/components/Atoms/Icon.vue'
import FlexBox from '@/components/Atoms/FlexBox.vue'

type XY = {
  x: number,
  y: number
}

type HeaderState = {
  xy: XY,
  timer?: number
}
export default defineComponent({
  name: 'Header',
  components: {
    MainTitle,
    Hio,
    Icon,
    FlexBox
  },
  setup () {
    const store = useStore()
    const route = computed(() => store.getters['system/getRoutePath']())
    const rname = computed(() => store.getters['system/getRouteName']())

    const state: HeaderState = reactive({
      xy: {
        x: 0,
        y: 0
      },
      timer: undefined
    })

    const handleResizeCore = (): void => {
      console.log('called handleResizeCore')
      const x = window.innerWidth
      const y = window.innerHeight
      const xy = {
        x: x,
        y: y
      }
      state.xy = xy
      console.log(x)
      store.dispatch('system/setXY', xy)
    }

    const handleResize = (): void => {
      if (state.timer !== undefined) clearTimeout(state.timer)
      state.timer = setTimeout(handleResizeCore, 100)
    }

    handleResizeCore()

    onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount((): void => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      route,
      rname,
      homeIcon,
      state
    }
  }
})
</script>

<style scoped>
.Header {
  padding-left: 20px;
  font-size: 30px;
  height: 0 auto;
  background: none;
}

.route {
  font-size: 14px;
  letter-spacing: 1px;
}

.MainTitle {
  margin-top: 14px;
  margin-left: 5px;
}

</style>
