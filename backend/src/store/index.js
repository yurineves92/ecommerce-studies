import { createStore } from 'vuex';
import * as actions from './actions';
import * as mutations from './mutation';

const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem('token'),
            data: {}
        }
    },
    getters: {},
    actions,
    mutations
});

export default store;