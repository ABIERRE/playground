<template>
  <div class="Header">
    <router-link to="/">
      <MainTitle :text="rname" />
    </router-link>
    <Hio>
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

export default defineComponent({
  name: 'Header',
  components: {
    MainTitle,
    Hio
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

    return { route, rname }
  }
})
</script>

<style scoped>
.Header {
  padding-left: 20px;
  font-size: 30px;
}

.route {
  font-size: 11px;
}
</style>
