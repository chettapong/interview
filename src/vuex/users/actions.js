import uuid from 'uuid'
import axios from 'axios'

import {
  DELETE_USER,
  CREATE_USER,
  UPDATE_USER,
  FETCH_USER,
  LOGIN_USER,
  REGISTER_USER,
  FETCHRESOURCE_USER
} from './mutation-types'
axios.defaults.baseURL = 'https://reqres.in/'

/*
getResults(page = 1) {
    axios.get('api/users?page=' + page)
        .then(response => {
            this.laravelData = response.data;
        });
}

export function fetchProducts ({ commit }, perPage) {
  axios.get(`/api/users`, {
    params: {
      page: perPage
    }
  })
    // .then(response => { commit(FETCH_PRODUCTS, response.data.data) })
    .then((response) => { console.log(response.data.data) })
}
*/
export function fetchUser ({ commit }) {
  return axios.get(`/api/users`)
    .then(response => { commit(FETCH_USER, response.data) })
    // .then((response) => { console.log(response.data) })
}
export function createUser ({ commit }, user) {
  return axios
    .post('/api/users', user)
    .then(response => commit(CREATE_USER, response.data))
}
export function updateUser ({ commit }, user) {
  return axios
    .put(`api/users/${user.id}`, user)
    .then(response => commit(UPDATE_USER, response.data))
}
export function deleteUser ({ commit }, userId) {
  return axios
    .delete(`api/users/${userId}`)
    .then(response => commit(DELETE_USER, userId))
}

export function fetchresourceUser ({ commit }) {
  return axios.get(`/api/unknown`).then(response => {
    commit(FETCHRESOURCE_USER, response.data.data)
  })
  // .then((response) => { console.log(Array(response.data.data)) })
}

export function login ({ commit }, user) {
  return axios
    .post(`api/login/`, user)
    .then(response => commit(LOGIN_USER, user))
}

export function register ({ commit }, user) {
  return axios
    .post(`api/register/`, user)
    .then(response => commit(REGISTER_USER, user))
}

export function saveUser ({ commit, state }, user) {
  const index = state.all.findIndex(p => p.id === user.id)
  if (index !== -1) {
    return updateUser({ commit }, user)
  } else {
    user.id = uuid.v4()
    return createUser({ commit }, user)
  }
}
