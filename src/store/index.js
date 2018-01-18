import Vuex from 'vuex'
import axios from 'axios'

const token = localStorage.getItem('token')

export function createStore () {
  const store = new Vuex.Store({
    state: {
      userToken: token,
      user: {}
    },
    mutations: {
      setUser: (state, user) => {
        state.user = user
      },
      setUserStripe: (state, stripeSubscriptionId) => {
        state.user.stripeSubscriptionId = stripeSubscriptionId
      },
      setToken: (state, token) => {
        state.userToken = token
      }
    },
    actions: {
      setToken: async (store, payload) => {
        localStorage.setItem('token', payload.token)
        store.commit('setToken', token)
        try {
          const token = payload.token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          const response = await axios.get('https://flightfares.herokuapp.com/api/me')
          store.commit('setUser', response.data.user)
        } catch (e) {

        }
      }
    }
  })

  return store
}
