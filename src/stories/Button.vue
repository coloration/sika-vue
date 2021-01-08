<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed, defineComponent } from '@vue/composition-api'
import './button.css'

export default defineComponent({
  name: 'my-button',
  props: {
    label: { type: String, required: true },
    primary: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'medium',
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  setup (props: any, context: any) {
    
    const classes = computed(() => ({
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size}`]: true,
    }))

    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }))

    function handleClick () {
      context.emit('onClick')
    }

    return { classes, style, handleClick }
  },
  methods: {
    onClick() {
      this.handleClick()
    },
  },
})
</script>

