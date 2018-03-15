<template>
	<div class="container">
		<div class="middle page">
			<div class="side-nav">
				<a href="javascript:void(0)">代孕知识/Konwledge</a>
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
					<h3>代孕知识<span>Konwledge</span></h3>
					<div class="locate">
						<span>您现在的位置在 : </span>
						<ul>
							<li @click="loadActive(0)">
								<router-link to="index">首页</router-link>
							</li>
							<li>
								代孕知识
							</li>
						</ul>
					</div>
				</div>
				<div class="details">
					<div class="article-title">代孕现象到底是为了家庭幸福美满，还是应该严厉遏制！</div>
					<div class="article-details">
						<span>作者：好妈妈代孕网</span>
						<span>上传时间：2017/8/8  13：38：02</span>
						<span>浏览次数：<em>68</em>次</span>
						<a href="javascript:history.back(-1)">返回上级</a>
					</div>
					<div class="article-content">
						<p>雇主、中介、代孕妈妈，武汉的一些小区和医院里，非法地下代孕交易不断出现。一名因代孕而身心受创的宁夏女子，向本
报记者举报代孕的种种黑幕。一个月来，本报多名记者卧底暗访，曝光武汉地下代孕灰色链条。卫生和社会伦理专家表示，
虽然代孕非法，但监管法规尚处空白，这种行为暗藏的伦理风险，亟待重视。
6月28日，本报热线接到一名女子的举报：“武汉有不少公司，从事地下代孕工作，我就是其中一个受害者，希望你们能够
介入调查并曝光‘借腹生子’的黑幕，让地下代孕中介无处藏身。”对这一信息，本报编辑部高度重视，迅速安排记者调
查核实。在中南医院，记者见到了来自宁夏的举报人刘敏（化名），她替人代孕29周+4天后胎死腹中，因频繁代孕，可能
面临终身不孕。</p>			
						<div>
							<img src="../assets/images/details.jpg" />
						</div>
						<p>随后一个月，本报记者兵分两路，一部分记者扮作代孕妈妈（以下简称代妈），成功进入“代孕车间”居住，摸清代孕检查、
待产等流程；另一部分记者则扮作雇主，与武汉代孕公司接触，逐步摸清了武汉地下代孕中介提供非法代孕服务的整个环节。
本报记者调查发现，面对雇主，代孕公司开出起步价为38万元的代孕服务，55万元则可包办借腹生子，有的甚至推出199万元
的代孕豪华套餐服务，代妈在完成整个代孕过程后大约可获15万元的佣金。武汉一家代孕公司的负责人声称，全国每年成功完
成代孕至少5000例，其中武汉约2000例。</p>
						<p>随后一个月，本报记者兵分两路，一部分记者扮作代孕妈妈（以下简称代妈），成功进入“代孕车间”居住，摸清代孕检查、
待产等流程；另一部分记者则扮作雇主，与武汉代孕公司接触，逐步摸清了武汉地下代孕中介提供非法代孕服务的整个环节。
本报记者调查发现，面对雇主，代孕公司开出起步价为38万元的代孕服务，55万元则可包办借腹生子，有的甚至推出199万元
的代孕豪华套餐服务，代妈在完成整个代孕过程后大约可获15万元的佣金。武汉一家代孕公司的负责人声称，全国每年成功完
成代孕至少5000例，其中武汉约2000例。
“我遭的罪，是无法用金钱来弥补的。”29岁的刘敏（化名），是一名地下代孕妈妈。从2011年开始，她在武汉通过不同的
地下代孕公司多次接受代孕手术，可每次怀孕不久便流产。去年6月，她再次成功怀孕，可6个月后又不幸胎死腹中。医生告
诉她，今后她怀孕的几率非常小，即便怀孕，也可能有生命危险。
上月底，这名29岁的宁夏女子来到本报反映情况，希望曝光武汉地下代孕市场黑幕，通过自己的遭遇，给想挣这份灰色收入
的人以警醒。</p>
					<p>做个B超就签约 3次流产仍继续</p>
					<p>如何解释？剖腹产会在腹部留下疤痕，丈夫发现后怎么办？</p>
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
					isActive: true
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
			this.$store.commit("changeActive",5)
		}
	}
</script>