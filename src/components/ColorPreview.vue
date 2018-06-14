<template>
    <div class="color-preview" :style="style">
        <p>Test background color</p>
    </div>
</template>

<script>
export default {
    name: "ColorPreview",
    props: {
        color: { type: String, required: true }
    },
    computed: {
        style() {
            return { backgroundColor: this.color };
        }
    }
};
</script>