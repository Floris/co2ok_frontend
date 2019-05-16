import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userToken: '',
    userName: '',
    userAuthData: [],
    userData: []
  },
  mutations: {
    setLocalUserData(state, data) {
      window.localStorage.setItem('userToken', data.userToken);
      window.localStorage.setItem('userId', data.userId);
      window.localStorage.setItem('userName', data.userName);
    },

    removeLocalUserData(state) {
      window.localStorage.removeItem('userToken');
      window.localStorage.removeItem('userId');
      state.userData = '';
    }
  }
})
