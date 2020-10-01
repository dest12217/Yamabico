import { Module } from 'vuex'
import { ServicesState, RootState } from '@/store/types'

const store: Module<ServicesState, RootState> = {
  namespaced: true,
  state: {
    items: [
      {
        name: 'Google',
        key: 'google',
        type: 'aA0@',
        icon: ['fab', 'google']
      },
      {
        name: 'Twitter',
        key: 'twitter',
        type: 'aA0@',
        icon: ['fab', 'twitter']
      },
      {
        name: 'Amazon',
        key: 'amazon',
        type: 'aA0@',
        icon: ['fab', 'amazon']
      },
      {
        name: 'AppleID',
        key: 'apple',
        type: 'aA0@',
        icon: ['fab', 'apple']
      },
      {
        name: 'ロリポ/ムームー',
        key: 'gmo',
        type: 'aA0@',
        icon: ['fas', 'server']
      }
    ]
  },
  getters: {
    items (state: ServicesState) {
      return state.items
    }
  },
  mutations: {
  },
  actions: {
  }
}

export default store
