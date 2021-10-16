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
      type: String,
      required: false,
      default: '20'
    },
    delay: {
      type: Number,
      required: false,
      default: 300
    }
  },
  setup (props) {
    const store = useStore()
    const len = parseInt(props.length) || 300
    const bounce = len / 5
    return {
      enter (el: HTMLElement, done: () => void): void {
        if (!el) return
        if (store.getters['system/isPage']()) return

        const delay = props.delay || 300
        const tl = V.timeline()
        tl.add({
          targets: el,
          translateY: len,
          easing: 'easeOutQuad',
          opacity: 0,
          duration: 0
        })
        tl.add({
          targets: el,
          translateY: '-=' + (len + bounce),
          opacity: 1,
          delay: delay,
          easing: 'easeOutQuad',
          duration: 300
        })
        tl.add({
          targets: el,
          opacity: 1,
          translateY: '+=' + bounce,
          easing: 'easeOutQuad',
          duration: 300,
          complete () {
            el.removeAttribute('style')
            done()
          }
        })
      },
      leave (el: HTMLElement, done: () => void): void {
        V({
          targets: el,
          translateY: len,
          opacity: 0,
          easing: 'easeOutQuad',
          duration: 300,
          complete () {
            done()
          }
        })
      }
    }
  }
})
</script>
