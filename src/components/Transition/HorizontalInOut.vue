<template>
  <transition
    appear
    mode="out-in"
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>
<script lang="ts">
import V from 'animejs'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  name: 'HorizontalInOut',
  props: {
    length: {
      type: Number,
      required: false,
      default: 60
    },
    delay: {
      type: Number,
      required: false,
      defalut: 0
    },
    direction: {
      type: String,
      required: false,
      delfaut: 'left'
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup (props) {
    const len = props.length || 60
    const bounce = len / 10
    const direction = props.direction === 'left' ? '-' : '+'
    const reverse = props.direction === 'left' ? '+' : '-'
    console.log('props.direction', props.direction)
    console.log('direction', direction)
    console.log('reverse', reverse)

    return {
      enter (el: HTMLElement, done: () => void): void {
        console.log('HorizontalInOut called Enter', props.disable)
        if (props.disable) return done()

        el.style.opacity = '0'
        const delay = props.delay
        console.log(direction + len + 'px')
        console.log(direction + '=' + (len + bounce) + 'px')
        console.log(reverse + '=' + bounce + 'px')

        const tl = V.timeline()
        tl.add({
          targets: el,
          easing: 'easeOutQuad',
          translateX: reverse + len + 'px',
          opacity: 0,
          duration: 0
        })
        tl.add({
          targets: el,
          easing: 'easeOutQuad',
          translateX: direction + '=' + (len + bounce) + 'px',
          opacity: 1,
          duration: 200,
          delay: delay
        })
        tl.add({
          targets: el,
          easing: 'easeOutQuad',
          opacity: 1,
          translateX: reverse + '=' + bounce + 'px',
          duration: 300,
          complete () {
            el.removeAttribute('style')
            return done()
          }
        })
      },
      leave (el: HTMLElement, done: () => void): void {
        V({
          targets: el,
          easing: 'easeOutQuad',
          translateX: reverse + len + 'px',
          opacity: 0,
          duration: 300,
          complete () {
            el.removeAttribute('style')
            return done()
          }
        })
      }
    }
  }
})
</script>
