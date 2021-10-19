<template>
  <div class="Typer">
    {{ state.text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, watch } from 'vue'
type TyperState = {
  text: string
}
export default defineComponent({
  name: 'Typer',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Typer'
    },
    interval: {
      type: Number,
      required: false,
      default: 30
    }
  },
  setup (props) {
    const state: TyperState = reactive({
      text: ''
    })

    const typing = (): void => {
      [...props.text].forEach((character, index) => {
        setTimeout(() => {
          state.text += character
        }, props.interval * ++index)
      })
    }

    watch(() => props.text, () => {
      state.text = ''
      typing()
    })

    onMounted(() => {
      state.text = ''
      typing()
    })

    return { state }
  }
})
</script>
