<template>
    <p>The price is: {{currencySymbol}}{{amount}}</p>
</template>

<script>
export default {
    name: "PriceDisplay",
    props: {
        priceSoFar: { 
            type: Number, 
            required: true,
            validator: value => value >= 0
        },
        unit: { type: String, default: "$" }
    },
    data() {
        return {
            currencySymbol: this.unit
        };
    },
    computed: {
        amount() { 
            return this.priceSoFar;
        }
    }
};
</script>