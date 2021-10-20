<template>
  <transition
    appear
    mode="out-in"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

import V from 'animejs'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'VerticalInOut',
  props: {
    length: {
      type: Number,
      required: false,
      default: 30
    },
    delay: {
      type: Number,
      required: false,
      default: 20
    }
  },
  setup (props) {
    const store = useStore()
    const len = props.length || 30
    return {
      enter (el: HTMLElement, done: () => void): void {
        if (!el) return
        if (store.getters['system/isPage']()) return

        const delay = props.delay || 20
        const tl = V.timeline()
        tl.add({
          targets: el,
          translateY: len,
          opacity: 0,
          easing: 'easeOutQuad',
          delay: delay,
          duration: 0
        })

        tl.add({
          targets: el,
          translateY: 0,
          opacity: 1,
          easing: 'easeOutQuad',
          delay: delay,
          duration: 400,
          complete () {
            done()
            el.removeAttribute('style')
          }
        })
      },
      leave (el: HTMLElement, done: () => void): void {
        const delay = props.delay || 20
        V({
          targets: el,
          translateY: len,
          opacity: 0,
          easing: 'easeOutQuad',
          duration: 500,
          delay: delay,
          complete () {
            done()
          }
        })
      }
    }
  }
})
</script>
