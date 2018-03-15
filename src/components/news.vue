<template>
	<div class="container">
		<div class="middle page">
			<div class="side-nav">
				<a href="javascript:void(0)">代孕新闻/News</a>
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
					<h3>代孕新闻<span>News</span></h3>
					<div class="locate">
						<span>您现在的位置在 : </span>
						<ul>
							<li @click="loadActive(0)">
								<router-link to="index">首页</router-link>
							</li>
							<li>
								代孕新闻
							</li>
						</ul>
					</div>
				</div>
				<div class="news">
					<ul class="list">
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
								<em>more+</em>
							</router-link>
						</li>
						<li>
							<router-link to="details">
								<h3>加拿大女子吉娜·卢卡斯和婆婆苏珊·卢卡斯的关系却胜似母女</h3>
								<p>因为婆婆的肚子里曾经孕育着她的孩子。英国媒体12，吉娜结婚后，发现自己不能生，48岁的婆婆苏珊挺身而出，愿意为继子德里
克及媳妇吉娜当代孕妈妈。如今，苏珊已经生下了自己的孙女伊娃....</p>
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
					isActive: false
				},{
					id: 4,
					value: '代孕新闻',
					name: 'news',
					isActive: true
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
			this.$store.commit("changeActive",3)
		}
	}
</script>