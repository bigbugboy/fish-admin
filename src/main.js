import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 按需引入element-ui和重置css
import './plugins/element.js'
import './assets/css/reset.css'

import Breadcrumb from '@/components/Breadcrumb'


// 注册全局组件
Vue.component('Breadcrumb', Breadcrumb)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
