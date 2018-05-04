import Vue from 'vue';
import Vuex from 'vuex';
import presentationsApi from '../../api/presentations';

Vue.use(Vuex);

const stateObj = {
  list: [],
};

// getters
const getters = {
  getList(state: any) {
    return state.list;
  },
};

// actions
const actions = {
  getPresentations({ commit }: { commit: any }) {
    presentationsApi
      .getList()
      .then((presentations: any) => {
        commit('setList', presentations);
      });
  },
};

// mutations
const mutations = {
  setList(state: any, list: any) {
    state.list = list;
  },
};

export default new Vuex.Store({
  state: stateObj,
  getters,
  mutations,
  actions,
});

