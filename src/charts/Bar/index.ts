import Bar from './Bar.vue'

(Bar as any).install = function(Vue: any) {
  Vue.component(Bar.name, Bar);
}

export default Bar