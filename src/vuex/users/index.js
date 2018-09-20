import * as getters from './getters'
import * as actions from './actions'
import uuid from 'uuid'

import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  FETCH_USER,
  LOGIN_USER,
  REGISTER_USER,
  FETCHRESOURCE_USER,
  FETCHONERESOURCE_USER,
  FETCHONELIST_USER
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
    // console.log('1', user)
  },
  [FETCHONELIST_USER] (state, user) {
    state.all = user
  },

  [FETCHRESOURCE_USER] (state, user) {
    state.all = user
  },
  [FETCHONERESOURCE_USER] (state, user) {
    console.log('1', user)

    state.all = user
  },
  [CREATE_USER] (state, user) {
    user.id = uuid.v4()
    state.all.push(user)
  },

  [UPDATE_USER] (state, user) {
    const index = state.all.findIndex(p => p.id === user.id)

    if (index !== -1) {
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
