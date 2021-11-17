import axios from 'axios'

export default {
  state: {
    userInfo: {},
    userFeed: {},
  },

  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info
    },
    setUserFeed(state, feed) {
      state.userFeed = feed
    },

    clearUserInfo(state) {
      state.userInfo = {}
    },
    clearUserFeed(state) {
      state.userFeed = {}
    }

  },

  actions: {
    async GET_USER_INFO({ dispatch, commit, getters }, user) {
      const options = {
        method: 'GET',
        url: `https://tiktok33.p.rapidapi.com/user/info/${user}`,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
        }
      };
      await axios.request(options).then(function (response) {
        commit('setUserInfo', response.data)
        return response.data
      }).catch(function (error) {
        commit('setError', error)
      })
      
    },

    async GET_USER_FEED({ dispatch, commit, getters }, user) {
      const options = {
        method: 'GET',
        url: `https://tiktok33.p.rapidapi.com/user/feed/${user}`,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
        }
      }
      await axios.request(options).then(function (response) {
        commit('setUserFeed', response.data)
        return response.data
      }).catch(function (error) {
        console.error(error)
      })
    },
  },

  getters: {
    INFO: (s) => s.userInfo,
    FEED: (s) => s.userFeed,
  },

}
