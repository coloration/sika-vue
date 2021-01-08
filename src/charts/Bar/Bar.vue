<template>
<div class="sk-chart-bar">
  <div class="sk-chart-bar__chart flex justify-evenly pb-2">
    <div 
      class="sk-chart-bar__bar flex items-end" 
      :style="{ background: theme.bgSecondary }"
      v-for="(v, i) in displayValue" 
      :key="i">
      <div class="flex-1" :style="{ height: v, background: theme.primary }"></div>
    </div>    
  </div>
  <div class="flex items-end justify-evenly">
    <div 
      :style="{ color: theme.textSecondary }"
      v-for="(c, i) in category" 
      :key="i"
    >{{ c }}</div>
  </div>
</div>
</template>

<script lang="ts">
import { ThemeConfigure } from '../../provider/ThemeProvider/type'
import { computed, defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Array,
      default: () => []
    },
    category: {
      type: Array,
      default: () => []
    },
  },

  setup (props) {
    const themeConfig: ThemeConfigure = inject('themeConfig') as any
    
    const max = computed(() => {
      return Math.max(...props.value as number[]) * 1.2
    })

    const displayValue = computed(() => {
      return (props.value as number[]).map((v) => v / max.value * 100 + '%')
    })

    return {
      theme: themeConfig,
      max,
      displayValue
    }
  }
})
</script>
<style>
.sk-chart-bar__bar {
  width: 20px;
  height: 100px;
}
</style>