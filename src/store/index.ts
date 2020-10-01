import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import services from './services'

const store: StoreOptions<RootState> = {
  modules: {
    services
  }
}

Vue.use(Vuex)

export default new Vuex.Store<RootState>(store)
