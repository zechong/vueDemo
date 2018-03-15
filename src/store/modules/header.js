const state = {
	navActive: [],
    curIndex: 0
}
const getters = {
	getData: state => {
		return state.navActive;
	}
}
const mutations = {
	changeActive (state,$index){
		state.curIndex = $index;
	},
    setData (state,arr){
    	state.navActive = arr;
    }
}
const actions = {
    changeNav ({commit},$index) {
      	commit('changeActive',$index)
    }
}
export default {
	state,
	getters,
	mutations,
	actions
}