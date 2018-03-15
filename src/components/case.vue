<template>
	<div class="container">
		<div class="middle page">
			<div class="side-nav">
				<a href="javascript:void(0)">代孕案例/Successful case</a>
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
					<h3>代孕案例<span>Successful case</span></h3>
					<div class="locate">
						<span>您现在的位置在 : </span>
						<ul>
							<li @click="loadActive(0)">
								<router-link to="index">首页</router-link>
							</li>
							<li>
								代孕案例
							</li>
						</ul>
					</div>
				</div>
				<div class="case">
					<ul class="list">
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case1.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【51岁  龙先生】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case2.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【43岁  胡女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case3.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【35岁  黄女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case4.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【51岁  龙先生】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case5.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【43岁  胡女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case6.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【35岁  黄女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case7.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【51岁  龙先生】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case8.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【43岁  胡女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<div class="pic">
									<img src="../assets/images/case9.jpg" />
									<p>代孕宝宝在喝奶</p>
								</div>
								<p>【35岁  黄女士】胖嘟嘟的脸孔，肥肥的身子，十分可爱</p>
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
					isActive: true
				},{
					id: 3,
					value: '代孕套餐',
					name: 'packages',
					isActive: false
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
			this.$store.commit("changeActive",2)
			AOS.init({
				easing: 'ease',
				duration: 1000
			});
		}
	}
</script>