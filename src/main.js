import Vue from 'vue'
import VueResource from 'vue-resource';
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'

window.axios = require('axios');
axios.defaults.withCredentials = true;
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver,
    htmlSerializer
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')