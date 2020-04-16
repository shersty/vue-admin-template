import { getSuitList } from '@/api/suit'

const state = {
  suitList: '',
  apiAddFormVisible: false
}

const mutations = {
  SET_SUIT_LIST: (state, suitList) => {
    state.suitList = suitList
  },
  T_API_ADD_FORM: (state) => {
    console.log('commit T_API_ADD_FORM begin ' + state.apiAddFormVisible)
    state.apiAddFormVisible = true
    console.log('commit T_API_ADD_FORM end ' + state.apiAddFormVisible)
  },
  F_API_ADD_FORM: (state) => {
    state.apiAddFormVisible = false
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
