<template>
    <div>
        sum:{{$store.state.count}}
    </div>
</template>

<script>
    export default {
        name: 'CounterSum',
        props: ['sum'],
        methods: {

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
