import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'

Vue.use(Vuex)
const state = {
	count: 0,
	message: 'hello',
	todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: false }
    ],
    obj:{
    	message: 'hello,world'
    },
}
const getters = {
	doneTodos: state => {
      	return state.todos.filter(todo => todo.done)
   	},
    doneTodosCount: (state, getters) => {
	    return getters.doneTodos.length
	},
	getTodoById: (state) => (id) => {
	    return state.todos.find(todo => todo.id === id)
	}
}
const mutations = {
	increment (state) {
      	// 变更状态
      	state.count++;
    },
    decrement (state) {
      	state.count--;
    },
    updateMessage (state, message) {
	    state.obj.message = message
	}
}
const actions = {
	increment ({ commit }) {
  		commit('increment')
	},
    decrement ({ commit }) {
      	commit('decrement')
    }
}

export default new Vuex.Store({
	modules: {
    	header
  	},
    state,
    getters,
    mutations,
    actions,
    strict: true
})