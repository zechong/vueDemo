<template>
	<div name="demo">
		<!--<div>{{getNum()}}</div>-->
		<!--<div>{{countAlias}}</div>-->
		<div>{{doneCount}}</div>
		<div>{{getTodoById(1)}}</div>
		<div>{{countPlusLocalState}}</div>
		<!--<div>{{increment}}</div>
		<div>{{decrement}}</div>-->
		<button @click="increment">增加mapMutations</button>
		<button @click="decrement">减少mapMutations</button>
		<br />
		<button @click="add">增加mapActions</button>
		<button @click="remove">减少mapActions</button>
		<br />
		<input :value="message" @input="updateMessage" style="margin-top: 10px;">
		<input v-model="message" style="margin-top: 10px;">
		<div>{{message}}</div>
		{{ ok? message: '0' }}
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions  } from 'vuex'
	export default {
		name: 'demo',
		data() {
			return {
				msg: 'world',
				localCount: 1,
				ok: false
			}
		},
		computed: {
			...mapState({
			    // 箭头函数可使代码更简练
			    count: state => state.count,
// 				message: state => state.obj.message,
			    // 传字符串参数 'count' 等同于 `state => state.count`
			    countAlias: 'count',
			
			    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
			    countPlusLocalState (state) {
			      	return state.count;
			    }
			}),
			...mapGetters({
			    doneCount: 'doneTodos',
			    getTodoById: 'getTodoById'
		    }),
		    message: {
			    get () {
			      	return this.$store.state.obj.message
			    },
			    set (value) {
			      	this.$store.commit('updateMessage', value)
			    }
			}
	 	},	
	  	methods: {
	  		...mapState({
			    getNum (state) {
			      	return state.message + "," + this.msg
			    }
	  		}),
           	...mapMutations(['increment', 'decrement']),
           	...mapActions({
           		add: 'increment',
           		remove: 'decrement'
       		}),
       		updateMessage (e) {
			    this.$store.commit('updateMessage', e.target.value)
			}
	  	},
	  	mounted: function(){
	  		var _this = this;
	  		this.$nextTick(function(){
	  			_this.$parent.$el.querySelector(".header").innerHTML= "";
       			_this.$parent.$el.querySelector(".foot").innerHTML= "";
	  		})
	  	}
	}
</script>