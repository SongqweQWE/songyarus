import Vue from 'vue'
import App from './App.vue'
import router from './router'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// css
import "@/style/index.css"

// 拦截ajax
if (process.env.NODE_ENV === 'development') {
  require("./mock")
}

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')