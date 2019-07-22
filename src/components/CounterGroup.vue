<template>
    <div class="hello">
        <div>
            <input type="number" min="0" v-model.number="counterNum">
            <span>{{counterNum}}</span>
        </div>
        <br>
            <Counter v-for="(item,index) in counterNum" :key="index" @destroyCounter="destroyCounter"></Counter>
        <br>
        <CounterSum></CounterSum>


    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import CounterSum from './CounterSum.vue'

    export default {
        name: 'CounterGroup',
        components: {Counter, CounterSum},
        data: function () {
            return {
                counterNum: 0,
                counters:[],
                sum:0
            }
        },
        methods: {
            destroyCounter: function(counter){
                // this.$store.state.count-= counter;
                // this.$store.dispatch('changeSum',-1)
                this.$store.commit('changeSum',-1)
               // console.log(this.$store.state.count)
            },
            // counterChange: function (value) {
            //     // this.counters.f
            //     this.$store.commit('changeSum',value)
            // }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span {
        margin: 40px;
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
</style>
