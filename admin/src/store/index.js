import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import mutations from './mutation'
// import actions from './actions'
// import getters from './getters'
import content from './content'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    content,
  },
})