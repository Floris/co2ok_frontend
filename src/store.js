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
      window.localStorage.setItem('userToken', data.token);
      window.localStorage.setItem('userId', data.id);
      //    let getLocalData = {
      //        userToken: window.localStorage.getItem('userToken'),
      //        userId: window.localStorage.getItem('userId')
      //    }
      //     state.userAuthLocalData = getLocalData;
    },

    removeLocalUserData(state) {
      window.localStorage.removeItem('userToken');
      window.localStorage.removeItem('userId');
      state.userData = '';
    }
  }
})
