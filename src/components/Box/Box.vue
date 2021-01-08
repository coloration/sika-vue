<template>
<div class="sk-box box-border flex flex-col" :style="boxStyle">
  <div class="sk-box__title flex h-10 items-center px-1" :style="bgStyle">
    <div class="w-1 rounded h-4 mr-1 bg-current"></div>
    <div class="sk-box__title-content" :style="textStyle">
      {{ title }}
    </div>
    <div class="sk-box__title-tooltip">

    </div>
    <div class="sk-box__title-content flex-1 flex justify-end">
      <slot name="title-content"></slot>
    </div>
  </div>
  <div class="sk-box__gap h-2.5" :style="bgStyle">

  </div>
  <div class="sk-box__content flex-1 px-3 py-1" :style="contentStyle">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
import { ThemeConfigure } from '../../provider/ThemeProvider/type'
import { defineComponent, inject, computed, onMounted } from '@vue/composition-api'

function formatNumberSize (n: number | string) {
  return typeof n === 'number' ? n + 'px' : n
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String]
    }
  },
  setup (props) {

    const themeConfig: ThemeConfigure = inject('themeConfig') as any
    
    const boxStyle = computed(() => ({
      width: props.width ? formatNumberSize(props.width) : '100%',
      height: props.height ? formatNumberSize(props.height) : '100%',
      color: themeConfig.primary,
    }))

    const bgStyle = computed(() => ({
      background: themeConfig.bgPrimary
    }))

    const textStyle = computed(() => ({
      color: themeConfig.textPrimary
    }))

    const contentStyle = computed(() => {
      return Object.assign({}, bgStyle.value, textStyle.value)
    })
    
    return {  
      boxStyle,
      textStyle,
      bgStyle,
      contentStyle
    }

  }
})

</script>
<style>

.sk-theme-provider.theme-default .sk-box {
  box-shadow: 0 0 8px #fff;
}

.sk-theme-provider.theme-breath .sk-box__title {
  border: 1px solid currentColor;
  box-shadow: inset 0 0 4px currentColor;
}

.sk-theme-provider.theme-breath .sk-box__gap {
  visibility: hidden;
}

</style>