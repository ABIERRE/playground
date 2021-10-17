<template>
  <div class="Header">
    <router-link to="/">
      <MainTitle class="InlineBlock" :text="rname" />
      <Icon
        class="InlineBlock"
        :size="27"
        :src="homeIcon"
        v-show="route !== '/'"
      />
    </router-link>

    <Hio :delay="300" :length="60">
      <div class="route" v-show="route !== '/calender'">
        <router-link to="/calender">Calender</router-link>
      </div>
    </Hio>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useStore } from 'vuex'
import MainTitle from '@/components/Atoms/MainTitle.vue'
import Hio from '@/components/Transition/HorizontalInOut.vue'

import homeIcon from '@/assets/home.svg'
import Icon from '@/components/Atoms/Icon.vue'

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
    console.log(route.value, rname.value)

    watch(() => route.value, () => {
      console.log(route.value)
      console.log(rname.value)
    })

    return {
      route,
      rname,
      homeIcon
    }
  }
})
</script>

<style scoped>
.Header {
  padding-left: 20px;
  font-size: 30px;
  height: 0 auto;
}

.route {
  font-size: 14px;
  letter-spacing: 1px;
}

.InlineBlock {
  display: inline-block;
  margin-right: 10px;
}
</style>
