<template>
<div class="sk-theme-provider" :class="classes">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed, ComputedRef } from '@vue/composition-api'
import { ThemeType, ThemeConfigure, themeDefaultConfig, themeBreathConfig, themeHackConfig } from './type'

const themeConfigMap = new Map<ThemeType, ThemeConfigure>([
  [ThemeType.default, themeDefaultConfig],
  [ThemeType.breath, themeBreathConfig],
  [ThemeType.hack, themeHackConfig],
])


export default defineComponent({
  name: 'ThemeProvider',
  props: {
    theme: {
      type: String,
      required: false,
      default: ThemeType.default
    },
    config: {
      type: Object,
    }
  },

  setup (props) {
    const theme = ref<ThemeType>(props.theme as ThemeType)

    const themeConfig = computed(() => {
      return props.config 
        ? props.config 
        : (themeConfigMap.get(theme.value) || themeDefaultConfig)
    })

    function updateTheme (type: ThemeType) {
      theme.value = type
    }

    const classes = computed(() => {
      return [theme.value]
    })

    provide<ThemeType>('theme', theme.value)
    provide<ThemeConfigure>('themeConfig', themeConfig.value as any)
    provide('setTheme', updateTheme)

    return {
      classes
    }
  }
})

</script>
