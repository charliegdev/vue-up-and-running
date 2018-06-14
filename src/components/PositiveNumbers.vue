<template>
    <p>{{ positiveNumbers.length }} positve numbers</p>
</template>

<script>

export default {
    name: 'PositiveNumbers',
    data() {
        return {
            numbers: [-5, 0, 2, -1, 1, 0.5]
        };
    },
    computed: {
        positiveNumbers() {
            return this.numbers.filter(number => number >= 0);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
