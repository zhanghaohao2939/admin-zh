<template>
    <div>        
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-info"></i> 信息管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            {{msg}}
            <el-row :gutter="20">
	            <el-col :span="8">
		            <el-card  shadow="hover" class="mgb20" style="height:252px;">
					    <div slot="header" class="clearfix">
					        <span>待办事项</span>
					        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
					    </div>
					    <div v-for="data in dataList" :key="data.index" class="text item">
					        {{data.title}}
					    </div>
					</el-card>
				</el-col>
				<el-col :span="8">
					<el-card  shadow="hover" class="mgb20" style="height:252px;">
					    <div slot="header" class="clearfix">
					        <span>进度情况</span>
					        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
					    </div>
					    田苗<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
						张浩浩<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
						谭锡辉<el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="warning"></el-progress>
						孙涛<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
					</el-card>
				</el-col>
			</el-row>			
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
			msg:'欢迎来到Vue--ZH',
			dataList:[
				{id:'1',title:'吃饭',index:0},
				{id:'2',title:'睡觉',index:1},
				{id:'3',title:'吃饭',index:2},
				{id:'4',title:'喝酒',index:3},
			],
			tableData:[],
		}
	},
	methods:{
		
	}
};
</script>

<style>

</style>