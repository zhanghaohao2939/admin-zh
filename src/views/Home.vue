<template>
  <div class="home">
    <hello-header></hello-header>
    <sider-bar></sider-bar>
    <div class="content-box" :class="{'content-collapse':collapse}">
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
import helloHeader from '@/components/header.vue'
import SiderBar from '@/components/siderBar.vue'
import bus from '../components/common/bus.js'

export default {
  name: 'Home',
  components: {
    helloHeader,
    SiderBar
  },
  data(){
    return{
      collapse: false
    }
  },
  created(){
    bus.$on('collapse-content',(msg)=>{
      console.log(msg)
      this.collapse = msg;
    })
  },
  methods:{

  }
}
</script>


