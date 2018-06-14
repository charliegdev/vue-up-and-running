<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p v-if="hours < 12">Good morning!</p>
        <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
        <p v-if="hours >= 18">Good evening!</p>

        <button @click="divVisible = !divVisible">Toggle Visibility</button>
        <transition name="fade">
            <div v-if="divVisible">This content is sometimes hidden.</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            hours: new Date().getHours(),
            divVisible: true
        };
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
