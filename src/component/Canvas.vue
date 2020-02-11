<template>
    <div id="my-canvas">
        <canvas ref="display" width="360" height="400"></canvas>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "crest",
    props: {
        userResponses: Array
    },
    data: function() {
        return {
            provider: {
                context: null
            }
        }
    },
    provide() {
        return {
            provider: this.provider
        }
    },
    mounted () {
        this.provider.context = this.$refs["display"].getContext("2d")
    }
}
</script>

<style scoped>

</style>