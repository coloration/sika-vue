import ThemeProvider from './ThemeProvider.vue'

(ThemeProvider as any).install = function(Vue: any) {
  Vue.component(ThemeProvider.name, ThemeProvider);
}

export default ThemeProvider
