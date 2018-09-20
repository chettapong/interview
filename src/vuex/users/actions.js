import axios from 'axios'

import {
  DELETE_USER,
  CREATE_USER,
  UPDATE_USER,
  FETCH_USER,
  LOGIN_USER,
  REGISTER_USER,
  FETCHRESOURCE_USER,
  FETCHONERESOURCE_USER,
  FETCHONELIST_USER
} from './mutation-types'
axios.defaults.baseURL = 'https://reqres.in/'

/*
getResults(page = 1) {
    axios.get('api/users?page=' + page)
        .then(response => {
            this.laravelData = response.data;
        });
}
*/

export function fetchUser ({ commit }) {
  return axios.get(`/api/users`)
    .then(response => { commit(FETCH_USER, response.data) })
    // .then((response) => { console.log(response.data) })
}
export function getonelist ({ commit }, user) {
  return axios.get(`/api/users/` + user.id)
    .then((response) => { commit(FETCHONELIST_USER, response.data.data) })
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
}
export function getone ({ commit }, user) {
  return axios.get(`/api/unknown/` + user.id)
    .then((response) => { commit(FETCHONERESOURCE_USER, response.data.data) })
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
  const index = state.all.findIndex((p) => p.id === user.id)
  console.log(user.first_name, '         ', user)
  if (index !== -1) {
    return updateUser({ commit }, user)
  } else {
    return createUser({ commit }, user)
  }
}

export function fetchoneresourceUser ({ commit, state }, user) {
  const index = state.all.findIndex(p => p.id === user.id)
  if (index !== -1) {
    return getone({ commit }, user)
  }
}
export function fetchoneUser ({ commit, state }, user) {
  const index = state.all.findIndex(p => p.id === user.id)
  if (index !== -1) {
    return getonelist({ commit }, user)
  }
}
