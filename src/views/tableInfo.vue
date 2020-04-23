<template>
    <div>        
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-info"></i> 表格管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
			<el-tabs type="border-card">
			    <el-tab-pane label="用户管理">
			    	<el-table
					    v-loading ="loading"
						element-loading-text="拼命加载中"
						element-loading-spinner="el-icon-loading"
				        :data="tableData"
						stripe
				        style="width: 100%">
				        <el-table-column
				            prop="fullname"
				            label="访客姓名"
				            width="180">
				        </el-table-column>
				        <el-table-column
				            prop="phonenum"
					        label="访客电话"
					        width="180">
				        </el-table-column>
				        <el-table-column
					        prop="applyname"
					        label="受访人">
				        </el-table-column>
						<el-table-column
					        prop="position"
					        label="受访人职位">
				        </el-table-column>
						<el-table-column
					        prop="applyphone"
					        label="受访人电话">
				        </el-table-column>
						<el-table-column
					        prop="orgdevicenames"
					        label="通行区域">
				        </el-table-column>
						<el-table-column
					        prop="address"
					        label="操作">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
								<el-button type="text" size="small">编辑</el-button>
							</template>
				        </el-table-column>
				    </el-table>
					<div class="block">
						<el-pagination
							background
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:page-size="10"
							layout="total, prev, pager, next"
							:total="total">
						</el-pagination>
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="配置管理">
					<h1 class="animated infinite bounce delay-2s">Example</h1>
					<div class="test" v-show='offsetFlag'>
						<div class="animated bounceInLeft delay-1s">
							<span class="testDiv">张浩浩来了！！！等他一秒</span>
						</div>
						<div class="animated bounceInRight delay-1s">
							<span class="testDivs">张浩浩来了！！！等他两秒</span>
						</div>	
					</div>
					<p class="animate text-p" data-ani="rollIn" data-delay="1000">Thank you for reading and I will continue to work hard! —————2018/08/08</p>
					
					<h1 class="yourElement">张浩浩来了！！！</h1>	
					<div class="com">张浩浩来了！！！</div>	
					<p class="animate text-p" data-ani="rollIn" data-delay="1000">Thank you for reading and I will continue to work hard! —————2018/08/08</p>		
				</el-tab-pane>
			    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			</el-tabs>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
	name: 'info',
	data(){
		return{
			tableData:[],
			pagesize: 10,
			currentpage: 1,
			total:'',
			loading: true,
			webSid: '',
			offsetFlag: false,
		}
	},
	created(){
		this.webSid = localStorage.getItem('wbsid');
		console.log(this.webSid)
		this.getRecords()
		
	},
	mounted(){
		this.$nextTick(() => {
	  		addEventListener('scroll', this.getScrollTop);
	  	})

	},
	destroyed() {
	  	removeEventListener('scroll', this.getScrollTop);//避免影响其他页面
	},

	computed: {
		username() {
			let username = localStorage.getItem('ms_username');
			return username ? username : this.name;
		},
		websid(){
			let webSid = localStorage.getItem('wbsid');
			return webSid;
		}
	},
	methods:{
		getRecords(){
			let params = {
				websid: this.webSid,
				pagesize: this.pagesize,
				currentpage: this.currentpage,
				orgid: 243
			}
			//后续添加的 防止中文乱码
			axios.defaults.headers = {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
			}
			axios.post('api/test/orgman/visitor/visitorspassrecords',qs.stringify(params))
				.then( (res) => {
					console.log(res);
					this.loading = false;	
					this.tableData = res.data.map1;
					this.total = res.data.count;
				})
				.catch( (err) => {
					console.log(err);
				})
		},
		handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentpage = val;
			this.getRecords()
		},
		getScrollTop(){
			var sTop = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(sTop)
			if(sTop>=10){
				this.offsetFlag = true;
			}
		}
	}
};
</script>

<style lang="less" scoped>
	// .test{
	// 	display: flex;
	// 	.testDiv{
	// 		height: 80px;
	// 		background: yellow;
	// 	}
	// 	.testDivs{
	// 		height: 80px;
	// 		background: red;
	// 	}
	// }
	.test{
		display: flex;
		justify-content: space-around;
		width: 100%;
		.testDiv{
			display: block;
			margin-right: 200px;
			width: 400px;
			height: 80px;
			line-height: 80px;
			text-align: center;
			color: #fff;
			font-size: 24px;
			background: green;
		}
		.testDivs{
			display: block;
			width: 400px;
			height: 80px;
			line-height: 80px;
			color: #fff;
			text-align: center;
			font-size: 24px;
			background: red;
		}
	}
	// .animate{
	// 	opacity: 0;
	// }
	.fadeInUpBig{
		animation: fadeInUpBig 1s;
	}
	.rollIn{
		animation: rollIn 1s;
	}

	.yourElement{
		animation-duration: 3s;
		animation-delay: 2s;
		animation-iteration-count: infinite;
	}
	.com{
		height: 600px;
	}
</style>