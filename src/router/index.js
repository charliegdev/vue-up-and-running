import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
});
