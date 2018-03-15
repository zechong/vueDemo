<template>
	<div class="container">
		<div class="middle page">
			<div class="side-nav">
				<a href="javascript:void(0)">代孕流程/Process</a>
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
					<h3>代孕流程<span>PROCESS</span></h3>
					<div class="locate">
						<span>您现在的位置在 : </span>
						<ul>
							<li @click="loadActive(0)">
								<router-link to="index">首页</router-link>
							</li>
							<li>
								代孕流程
							</li>
						</ul>
					</div>
				</div>
				<div class="progress">
					<h3>人工受孕流程</h3>
					<p>首先，需对接受人工授精的不孕女性做详细的妇科检查，检查内外生殖器是否正常、子宫内膜活检腺体分泌是否良
好、双侧输卵管是否通畅等，若这些都正常，才具备接受人工授精的条件。然后需要估计排卵日，以选择最佳的授精时间
。常用的估计排卵日的方法包括测定基础体温、宫颈粘液(一般在排卵前4-5天出现)，或接近排卵日连续测定尿黄体生成素
的峰值，或连续阴道超声波检查等。在女方估计排卵期前，赠精者或丈夫经手淫取出精液，需对精液进行化验，若结果显
示精液密度及活动度正常，待其精液液化后，用注射器或导管将精液注入阴道、子宫颈周围及子宫颈管内。女方卧床休息
2-3小时使精液不致排出。每位女性在一个月经周期中可进行3次人工授精，即在排卵日前3天开始，若按小时计算，即在
排卵日前72小时、24小时和排卵后24小时各进行一次，若在一个月经周期中未能受孕，可连续做几个周期。必要时可用
药物诱导排卵和调整好排卵期，以提高受孕率。判定人工授精的成败一般以12个周期为界。现将人工受精全过程介绍如下。
						</p>
					<ul>
						<li>·第一步：初步检查</li>
						<li>·第二步：促排卵</li>
						<li>·第三步：B超检查</li>
						<li>·第四步：取卵取精</li>
						<li>·第五步：胚胎培养</li>
						<li>·第六步：胚胎移植</li>
  						<li>.第七步：等待结果</li>
					</ul>
					<em>好妈妈代孕网：13797027000  189-07156511
<br />QQ：570632637
<br />邮箱：570632637@qq.com
<br />地址：广州市天河区光谷大道</em>
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
					isActive: true
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
			this.$store.commit("changeActive",1)
		}
	}
</script>
