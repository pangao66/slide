/**
 * Created by pg243 on 2017/4/12.
 */
import slideComponent from './slide.vue'
const slider = {
  install: function (Vue) {
    Vue.component('slide', slideComponent)
  }
}
export default slider
