import * as getters from './getters'
import * as actions from './actions'

import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  FETCH_USER,
  LOGIN_USER,
  REGISTER_USER,
  FETCHRESOURCE_USER
} from './mutation-types'

const userState = {
  all: [],
  page: [],
  per_page: [],
  total: [],
  total_pages: []
}

// mutations
const mutations = {
  [FETCH_USER] (state, user) {
    state.all = user.data
    state.page = user.page
    state.total = user.total
    state.total_pages = user.total_pages
    console.log('1', user)
  },
  [FETCHRESOURCE_USER] (state, user) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    // const result = Object.keys(menu).map(i => menu[i])

    /* const result = Object.keys(menu).map(function (key) {
      return [menu[key]]
    }) */
    console.log('1', user)

    state.all = user
  },
  [CREATE_USER] (state, user) {
    state.all.push(user)
  },

  [UPDATE_USER] (state, user) {
    const index = state.all.findIndex(p => p.id === user.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, user)
    }
  },

  [DELETE_USER] (state, userId) {
    state.all = state.all.filter(p => p.id !== userId)
  },

  [LOGIN_USER] (state, user) {
    state.all.push(user)
  },

  [REGISTER_USER] (state, user) {
    state.all.push(user)
  }
}

export default {
  state: { ...userState },
  getters,
  actions,
  mutations
}
