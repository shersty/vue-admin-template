import { getSuitList } from '@/api/suit'

const state = {
  suitList: ''
}

const mutations = {
  SET_SUIT_LIST: (state, suitList) => {
    state.suitList = suitList
  }
}

const actions = {
  getSuitList({ commit }) {
    return new Promise((resolve, reject) => {
      getSuitList().then(response => {
        const { data } = response
        if (!data) {
          reject('get api list error')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
