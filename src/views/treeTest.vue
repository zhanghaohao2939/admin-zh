<template>
    <div>        
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-info"></i> 树形图管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tree :data="testTree" highlight-current ></el-tree>
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
			treeData:[],
			pagesize: 10,
			currentpage: 1,
			total:'',
			loading: true,
			webSid:'',
			testTree:[{
				id: 1,
				label: '测试部',
					children: [{
						id: 4,
						label: '孙涛',
						children: [{
							id: 9,
							label: '孙涛二'
						}, {
							id: 10,
							label: '孙涛三'
						}]
					}]
				},
				{
				id: 2,
				label: '研发部',
					children: [{
						id: 5,
						label: '张浩浩'
					}, {
						id: 6,
						label: '谭锡辉'
					}]
				}, {
				id: 3,
				label: '销售部',
				children: [{
					id: 7,
					label: '王中豪'
				}, {
					id: 8,
					label: '卢诗颖'
				}]
			}],
		}
	},
	created(){
		this.webSid = localStorage.getItem('wbsid');
		console.log(this.webSid)
		this.getTree()
	},
	methods:{
		getTree(){
			let params = {
				websid: this.webSid,
				tag: 3,
				orgid: 243,
				fullname:''
			}
			//后续添加的 防止中文乱码
			axios.defaults.headers = {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
			}
			axios.post('api/test/orgman/usergroup/cusergroupquery',qs.stringify(params))
				.then( (res) => {
					console.log(res);
					this.loading = false;	
					this.treeData = res.data.usergroups;
				})
				.catch( (err) => {
					console.log(err);
				})
		}
	}
};
</script>

<style>

</style>