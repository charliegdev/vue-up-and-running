<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p v-if="hours < 12">Good morning!</p>
        <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
        <p v-if="hours >= 18">Good evening!</p>

        <button @click="divVisible = !divVisible">Toggle Visibility</button>
        <transition v-on:before-enter="handleBeforeEnter" v-on:enter="handleEnter" v-on:leave="handleLeave">
            <div v-if="divVisible">This content is sometimes hidden.</div>
        </transition>
    </div>
</template>

<script>
import { TweenLite } from "gsap/TweenMax";

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            hours: new Date().getHours(),
            divVisible: true
        };
    },
    methods: {
        handleBeforeEnter(el) {
            el.style.opacity = 0;
        },
        handleEnter(el, done) {
            TweenLite.to(el, 0.6, { opacity: 1, onComplete: done });
        },
        handleLeave(el, done) {
            TweenLite.to(el, 0.6, { opacity: 0, onComplete: done });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
