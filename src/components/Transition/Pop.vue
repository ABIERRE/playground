<template>
  <transition
    appear
    mode="out-in"
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <slot />
  </transition>
</template>
<script lang="ts">
import V from 'animejs'
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'Pop',
  props: {
    delay: {
      type: Number,
      required: false
    },
    stop: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },
  setup (props) {
    const store = useStore()
    const isPage = computed(() => store.getters['system/isPage']())
    return {
      enter (el: HTMLElement, done: () => void): void {
        if (props.stop === undefined) {
          if (!isPage.value) return
        } else {
          if (props.stop) return
        }

        const delay = props.delay || 200
        var tl = V.timeline()
        tl.add({
          targets: el,
          scale: 0,
          easing: 'easeOutQuad',
          duration: 0
        })
        tl.add({
          targets: el,
          scale: [0, 1.1, 1],
          easing: 'easeOutQuad',
          duration: 500,
          delay: delay,
          computed: () => {
            el.removeAttribute('style')
            done()
          }
        })
      },
      leave (el: HTMLElement, done: () => void): void {
        console.log(+new Date(), el)
        var tl = V.timeline()
        tl.add({
          targets: el,
          scale: [1, 1.1],
          easing: 'easeOutQuad',
          duration: 200,
          delay: 0
        })
        tl.add({
          targets: el,
          scale: [1, 0],
          easing: 'easeOutQuad',
          duration: 300,
          delay: 0,
          complete () {
            done()
          }
        })
      }
    }
  }
})
</script>
