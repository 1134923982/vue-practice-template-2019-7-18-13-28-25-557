<template>
    <div class="hello">
    <span>
    <button id="add" @click="sub">-</button>
      </span>
        <span>{{counter}}</span>
        <span>
    <button id="sub" @click="add" >+</button>
    </span>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data: function () {
            return {
                counter: 0,
                num: 0
            }
        },
        methods: {
            add: function () {
                this.counter++;
                this.$store.commit('changeSum',1)
            },
            sub: function () {
                this.counter--;
                this.$store.commit('changeSum',-1)
            }
        },
        beforeDestroy() {
            this.$store.commit('changeSum',-this.counter)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span{
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
