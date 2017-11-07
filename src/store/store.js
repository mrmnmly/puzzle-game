import Vue from 'vue';
import Vuex from 'vuex';

import popup from './modules/popup';
import errors from './modules/errors';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popup,
    errors,
  },
});
