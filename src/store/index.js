import Vuex from "vuex";
import VuexHistory from 'vuex-history';
import Vue from "vue";

Vue.use(Vuex);
Vue.use(VuexHistory);
const store = new Vuex.Store({
	state: {
		ipInfo: []
	},
	getters: {
		ipInfo: state => state.ipInfo
	},
	mutations: {
		setIpInfo(state, data) {
			state.ipInfo = [data, ...state.ipInfo];
		},
		clear(state) {
			state.ipInfo = [];
		}
	}
});

export default store;