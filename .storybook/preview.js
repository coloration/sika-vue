import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import '../src/style/index.css'
import { addParameters } from '@storybook/vue'

Vue.use(VueCompositionApi)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

}


addParameters({
  options: {
    
  },
  backgrounds: {
    default: 'dark',
    grid: {
    }
  }
})