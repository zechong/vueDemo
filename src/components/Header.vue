<template>
	<div class="header">
		<div class="middle">
			<div class="logo">
				<a href="#"> <img src="../assets/images/logo.png" /> </a>
			</div>
			<div class="nav">
				<ul>
					<template v-for="(item,$index) in getData">
						<li :class="{'active':$index === curIndex}" @click="loadActive($index)">
							<router-link :to="item.name">{{ item.value }}</router-link>
						</li>
					</template>
				</ul>
			</div>
		</div>
		<div class="banner" @mouseenter="enter" @mouseleave="leave">
			<div class="box">
				<transition-group
			            tag="ul"
			            class='ad'
			            name="image"
			            enter-active-class="animated flipInX"
			            leave-active-class="animated flipOutX">
			        <li v-for='(image,index) in img' :key='index' v-show="index === mark">
			            <a href="javascript:;">
			                <img :src="image">
			            </a>
			        </li>
			    </transition-group>
			</div>
			<div class="hd">
		        <span v-for="(item,index) in img.length" :class="{'active':index === mark}"
		         @click="change(index)" :key="index"></span>
		    </div>
			<div class="arrow">
		        <span class="prev" @click="prev">&lt;</span>
		        <span class="next" @click="next">&gt;</span>
		    </div>
		</div>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions  } from 'vuex'
	export default {
		name: 'header',
		data() {
			return {
				mark:0,
	            img:[
	                'static/images/banner1.jpg',
	                'static/images/banner2.jpg',
	                'static/images/banner3.jpg'
	            ],
	            time:null
			}
		},
		computed: {
			//得到数据
			...mapState({
				curIndex: state => state.header.curIndex,
			}),
			...mapGetters([
				'getData'
		    ])
		},
		methods: {
			//点击切换
			...mapMutations({
				loadActive: 'changeActive',
			}),
//			...mapActions({
//				loadActive: 'changeNav',
//			}),
			//设置数据
			...mapMutations([
				'setData'
			]),
			change(i){
                this.mark = i;
            },
            prev(){
                this.mark--;
                if(this.mark === -1){
                    this.mark = this.img.length-1;
                    return;
                }
            },
            next(){
                this.mark++;
                if(this.mark === this.img.length){
                    this.mark = 0;
                    return;
                }
            },
            autoPlay(){
                this.mark++;
                if(this.mark === this.img.length){
                    this.mark = 0;
                    return;
                }
            },
            play(){
                this.time = setInterval(this.autoPlay,3000);
            },
            enter(){
                clearInterval(this.time);
            },
            leave(){
                this.play();
            }
		},
		mounted: function(){
			this.play();
			//get方法获取nav数据，触发setData
			this.$http.get("../static/navData.json").then(
	            (res) => {
			    	this.$store.commit('setData', res.body)
	            },(res) => {
	            	console.log(res)
	            }
	        );
			this.$nextTick(() => {
				AOS.init({
					easing: 'ease',
					duration: 1000
				});
			})
		}
	}
</script>