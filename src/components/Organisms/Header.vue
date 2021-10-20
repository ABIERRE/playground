<template>
  <div class="Header">

    <Hio :delay="100" :length="60">
      <div class="Linker" v-if="route !== '/' && state.isReady">
        <router-link to="/">
          <FlexBox :padding="false">
          <Icon :src="HomeIcon" :size="15" :paddingTop="3"/>
            <div class="InlineBlock">Home</div>
          </FlexBox>
        </router-link>
      </div>
    </Hio>

    <router-link to="/">
      <Typer
        class="MainTitle"
        :text="rname"
      />
    </router-link>

    <Hio :delay="0" :length="60" v-if="route !== ''">
      <div class="route" v-if="route !== '/calendar' && state.isReady">
      <router-link to="/calendar">
        <FlexBox :padding="false">
        <Icon :src="CalendarIcon" :size="15" :paddingTop="3" />
          <div class="InlineBlock">Calendar</div>
        </FlexBox>
      </router-link>
      </div>
    </Hio>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import Hio from '@/components/Transition/HorizontalInOut.vue'
import Icon from '@/components/Atoms/Icon.vue'

import HomeIcon from '@/assets/home.svg'
import CalendarIcon from '@/assets/calendar.svg'

import Typer from '@/components/Molecules/Typer.vue'
import FlexBox from '../Atoms/FlexBox.vue'

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
    Hio,
    Icon,
    FlexBox,
    Typer
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
      const x = window.innerWidth
      const y = window.innerHeight
      const xy = {
        x: x,
        y: y
      }
      state.xy = xy
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
      CalendarIcon,
      HomeIcon
    }
  }
})
</script>

<style scoped>
.Header {
  padding-left: 20px;
  height: 0 auto;
  background: none;
}

.route {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
}

.MainTitle {
  width: 0 auto;
  height: 50px;
  line-height: 50px;
  margin-top: 0px;
  text-shadow: 3px 3px 3px #ddd;
  letter-spacing: 3px;
  font-size: 20px;
}

.InlineBlock {
  display: inline-block;
  height: 30px;
  line-height: 40px;
  vertical-align: top;
  margin-right: 5px;
  letter-spacing: 1px;
  margin-left: 5px;
}

.Linker {
  position: absolute;
  top: 10px;
  left: 20px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
}

</style>
