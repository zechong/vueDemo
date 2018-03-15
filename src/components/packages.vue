<template>
	<div class="container">
		<div class="middle page">
			<div class="side-nav">
				<a href="javascript:void(0)">服务套餐/Packages</a>
				<ul>
					<template v-for="(item,$index) in sidebarList">
						<li :class="[item.isActive?'cur':'']" @click="setActive($index)">
							<router-link :to="item.name">{{ item.value }}</router-link>
						</li>
					</template>
				</ul>
				<a href="javascript:void(0)">联系我们/Contact</a>
				<div class="hot-line">
					<h3>健康热线</h3>
					<p>189-07156511</p>
				</div>
			</div>
			<div class="content">
				<div class="title">
					<h3>服务套餐<span>Packages</span></h3>
					<div class="locate">
						<span>您现在的位置在 : </span>
						<ul>
							<li @click="loadActive(0)">
								<router-link to="index">首页</router-link>
							</li>
							<li>
								服务套餐
							</li>
						</ul>
					</div>
				</div>
				<div class="packages">
					<ul class="list">
						<li>
							<router-link to="details">
								<img src="../assets/images/packages1.jpg" />
								<h3>无风险包性别套餐总价90万</h3>
								<p>签约当日20万，着床三个月20万，着床五个月20万，着床七个月15万，婴儿健康
交接15万另：无风险一次性付款50万（签约当日）零首付包成功128万（婴儿健…</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<img src="../assets/images/packages2.jpg" />
								<h3>无风险包性别套餐总价90万</h3>
								<p>签约当日20万，着床三个月20万，着床五个月20万，着床七个月15万，婴儿健康
交接15万另：无风险一次性付款50万（签约当日）零首付包成功128万（婴儿健…</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<img src="../assets/images/packages3.jpg" />
								<h3>无风险包性别套餐总价90万</h3>
								<p>签约当日20万，着床三个月20万，着床五个月20万，着床七个月15万，婴儿健康
交接15万另：无风险一次性付款50万（签约当日）零首付包成功128万（婴儿健…</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<img src="../assets/images/packages4.jpg" />
								<h3>无风险包性别套餐总价90万</h3>
								<p>签约当日20万，着床三个月20万，着床五个月20万，着床七个月15万，婴儿健康
交接15万另：无风险一次性付款50万（签约当日）零首付包成功128万（婴儿健…</p>
								<em>more+</em>
							</router-link>
						</li>
					</ul>
					<div class="pagination">
						<span>总数8</span>
						<ul>
							<li class="cur">
								<a href="javascript:void(0)">1</a>
							</li>
							<li>
								<a href="javascript:void(0)">2</a>
							</li>
						</ul>
						<a href="javascript:void(0)">下一页</a>
						<span>页次1/2</span>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState,mapGetters,mapMutations,mapActions  } from 'vuex'
	export default {
		name: 'container',
		data() {
			return {
				sidebarList: [{
					id: 0,
					value: '代孕知识',
					name: 'details',
					isActive: false
				},{
					id: 1,
					value: '代孕流程',
					name: 'process',
					isActive: false
				},{
					id: 2,
					value: '代孕案例',
					name: 'case',
					isActive: false
				},{
					id: 3,
					value: '代孕套餐',
					name: 'packages',
					isActive: true
				},{
					id: 4,
					value: '代孕新闻',
					name: 'news',
					isActive: false
				}]
			}
		},
		methods: {
			setActive: function($index){
				var _this = this;
				_this.sidebarList.forEach(function(item,index){
					if( index == $index ){
						_this.sidebarList[index].isActive = true;
					}else{
						_this.sidebarList[index].isActive = false;
					}
				})
			},
		},
		mounted: function(){
			this.$store.commit("changeActive",4)
		}
	}
</script>