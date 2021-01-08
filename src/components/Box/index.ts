import Box from './Box.vue'

(Box as any).install = function(Vue: any) {
  Vue.component(Box.name, Box);
}

export default Box