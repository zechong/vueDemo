<template>
	<div class="foot">
		<div class="toolbar">
			<div class="qq">
				<a href="javascript:void(0)"> 在线咨询 </a>
			</div>
			<div class="phone">
				<a href="javascript:void(0)"> 电话咨询 </a>
			</div>
			<div class="go-top" v-show="topFlag">
				<a href="javascript:void(0)"> 返回顶部 </a>
			</div>
		</div>
		<div class="footer">
			<div class="middle">
				<div class="message">
					<h3>留言板</h3>
					<form>
						<div>
							<input type="text" name="phone" placeholder="电话" />
							<input type="text" name="name" placeholder="姓名" />
							<input type="text" name="email" placeholder="邮箱" />
						</div>
						<textarea placeholder="请留下您的留言..."></textarea>
						<input type="submit" name="submit" value="提交" />
					</form>
				</div>
				<ul class="contact">
					<li>地址：中国 湖北 武汉 武汉市洪山区光谷大道</li>
					<li>电话：189-07156511</li>
					<li>邮箱：617696969@qq.com</li>
				</ul>
				<div class="code"> <img src="../assets/images/code.jpg" />
					<p>好妈妈代孕网</p>
				</div>
				<div class="copyright">
					CopyRight © 好妈妈代孕网 版权所有 粤ICP备526843245-1号
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer',
		data() {
			return {
				topFlag: false
			}
		},
		mounted: function (){
			var btn;
			var _this = this;
			$(document).scroll(function() {
		        e();
		    });
			/*滚动到顶部*/
		    $(".go-top").click(function() {
		        btn = $(this)[0];
		        this.timer = setInterval(function() {
		            $(window).scrollTop(Math.floor($(window).scrollTop() * .8));
		            if ($(window).scrollTop() == 0) clearInterval(btn.timer, e)
		        },10)
		    });
			function e() {
		      	$(window).scrollTop() <= 300 ? _this.topFlag = false : _this.topFlag = true
		    }
		}
	}
</script>