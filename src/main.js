// 导入 vue 这个包 ，得到 vue 构造函数
import Vue from 'vue'
// 导入 app.vue 根组件， 将来要把 App.vue 中的模板结构渲染到 HTML 页面中
// import App from './App.vue'
import App from './Test.vue'

Vue.config.productionTip = false

// 创建 Vue 实例对象
new Vue({

  render: h => h(App),// 把 render 函数指定的组件渲染到 HTML 页面中

}).$mount('#app') // 等价于 el: '#app'
