<template>
  <div class="Header">
    <Hio :delay="100" :length="60">
      <div class="Linker" v-if="route !== '/' && state.isReady">
      <router-link to="/">
        <FlexBox>
        <Icon class="InlineBlock" :src="HomeIcon" :size="20" />
        <div class="InlineBlock">Home</div>
        </FlexBox>
      </router-link>
      </div>
    </Hio>
    <router-link to="/">
      <MainTitle class="MainTitle" :text="rname" />
    </router-link>

    <Hio :delay="0" :length="60" v-if="route !== ''">
      <div class="route" v-if="route !== '/calender' && state.isReady">
        <router-link to="/calendar">Calendar</router-link>
      </div>
    </Hio>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import MainTitle from '@/components/Atoms/MainTitle.vue'
import Hio from '@/components/Transition/HorizontalInOut.vue'
import Icon from '@/components/Atoms/Icon.vue'
import HomeIcon from '@/assets/home.svg'

type XY = {
  x: number,
  y: number
}

type HeaderState = {
  xy: XY,
  timer?: number,
  isReady: boolean
}
export default defineComponent({
  name: 'Header',
  components: {
    MainTitle,
    Hio,
    Icon
  },
  setup () {
    const store = useStore()
    const route = computed(() => store.getters['system/getRoutePath']())
    const rname = computed(() => store.getters['system/getRouteName']())
    const isPage = computed(() => store.getters['system/isPage']())

    const state: HeaderState = reactive({
      xy: {
        x: 0,
        y: 0
      },
      timer: undefined,
      isReady: false
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
      state.isReady = true
      handleResize()
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount((): void => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      state,
      route,
      rname,
      isPage,
      HomeIcon
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
  margin-right: 5px;
  text-shadow: 3px 3px 3px #ddd;
  letter-spacing: 3px;
}

.InlineBlock {
  display: inline-block;
  height: 30px;
  line-height: 50px;
  vertical-align: top;
  margin-right: 5px;
}

.Linker {
  position: absolute;
  top: 10px;
  left: 20px;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
}

</style>
