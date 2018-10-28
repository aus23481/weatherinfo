import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Tutorial from './views/Tutorial.vue'
import Home from './views/Home.vue'
import Weather from './components/Weather.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: Weather
        },

        {
            path: '/',
            redirect: { name: 'tutorial' }
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/preview',
            name: 'preview',
            component: Preview
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: Tutorial
        },
        {
            path: '*',
            redirect: { name: 'not-found' }
        }
    ]
})