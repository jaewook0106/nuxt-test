
const state = () => ({
  userList: '리스트답',
  fetchTest: ''
})

const getters = {

}

const mutations = {
  TEST_DATA(state, payload) {
    state.fetchTest = payload
  }
}

const actions = {

}

const namespaced = true

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced
}