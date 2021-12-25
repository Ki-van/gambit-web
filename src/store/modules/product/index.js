import axios from 'axios';
const state = {
    chessboards: []
}
const API_URL = 'https://kafitis.intbel.ru/api/';
const mutations = {
  updateChessboards (state, payload) {
    state.chessboards = payload;
  }
}

const actions = {
  getChessboards ({ commit  }) {
    axios.get(API_URL + `chessboards`).then((response) => {
      commit('updateChessboards', response.data)
    });
  }
}

const getters = {
    chessboards: state => state.chessboards,
    productItemById: (state) => (id) => {
        return state.chessboards.find(productItem => productItem.id === id)
    }
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;