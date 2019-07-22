import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        changeSum (state,status) {
            state.count+=status;
        }
    },
    actions: {
        changeSum: function ({commit}, num) {
            commit("changSum",num);
        }
    }
});

export default store;