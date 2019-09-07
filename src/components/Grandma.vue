<template>
    <div @click="buy">Grandmas {{ grandmas}} Cost {{ this.cost }}</div>

</template>


<script>
import {mapState, mapActions} from 'vuex'
import { setTimeout } from 'timers';

export default {

    name: 'Grandma',
    data() {
        return {
            cost: 10,
            cookiesPerSecond: 10,
        }
    },
    computed: mapState({
        totalScore: 'totalScore',
        currentScore: 'currentScore',
        grandmas: state => state.towers.grandmas
    }),

    methods: {
        ...mapActions([
            'bakeCookie',
            'buyGrandma'
        ]),
        bake() {
            this.bakeCookie(this.cookiesPerSecond * this.grandmas)
        },
        buy() {
            this.buyGrandma(this.cost)
            this.cost += this.cost + (this.cost * 0.15)
        }
    },
    mounted() {
        setInterval(this.bake, 1000)
    }
}

</script>