<template>
    <div>
        <h1>Total Cookies Baked: {{ totalScore }}</h1>
        <h2>Current Cash {{ currentScore }}</h2>

        <div @click="bake" class="cookie"></div>
    </div>

</template>


<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'cookie',

    computed: mapState({
        totalScore: 'totalScore',
        currentScore: 'currentScore'
    }),

    methods: {
        ...mapActions([
            'bakeCookie'
        ]),
        bake() {
            this.bakeCookie()
        }
    }

}

</script>


<style scoped>

.cookie {
    background-color: brown;
    width: 300px;
    height: 300px;
    border-radius: 20px;
}
</style>