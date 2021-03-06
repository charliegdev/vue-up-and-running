// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// eslint-disable-next-line
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

Vue.directive("blink", el => {
    let isVisible = true;
    setInterval(() => {
        isVisible = !isVisible;
        el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000);
});
