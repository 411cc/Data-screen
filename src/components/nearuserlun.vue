<template>
  <div class="main">
    <div class="page-example3">
      <vue-seamless-scroll :data="listData" :class-option="defaultOption" >
        <ul class="ul-scoll">
          <li v-for="(item, index) in listData" :key='index'>
              <img src="../assets/logo.png" alt="" class="iimg"><span class="title">{{item.title}}</span><span class="date">{{item.time}}</span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
 
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
    name: 'Example3',
    components: {
        vueSeamlessScroll
    },
    data() {
      // 这里存放数据
      return {
      listData: [
        { 
          'title': '1',
          'time': '2017-12-16'
        }, 
        {
          'title': '2',
          'time': '2017-12-16'
        }, 
        {
          'title': '3',
          'time': '2017-12-16'
        }, 
        {
          'title': '4',
          'time': '2017-12-16'
        }, 
        {
          'title': '5',
          'time': '2017-12-16'
        }, 
        {
          'title': '6',
          'time': '2017-12-16'
        }, 
        {
          'title': '7',
          'time': '2017-12-16'
        }, 
        {
          'title': '8',
          'time': '2017-12-16'
        }, 
        {
          'title': '9',
          'time': '2017-12-16'
        },
        {
          'title': '10',
          'time': '2017-12-16'
        }]
      }
    },
    // 监听属性 类似于data概念
    computed: {
      defaultOption () {
        return {
          step: 3, // 数值越大速度滚动越快
          limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }

    },
    // 方法集合
    methods: {},
    // 监控data中的数据变化
    watch: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    }
}
</script>
 
<style lang="less" scoped>
//@import url(); 引入公共css类
.page-example3{
  width: 538px;//518
  height: 215px;//285
  margin-left: -39px;
  overflow: hidden;
  .ul-scoll{
    li{
      list-style:none ;
      height: 50px;
      font-size: 30px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
  }
}
.main{
  width: 100%;
  height: 100%;
}
.iimg{
  width: 20px;
}
</style>　　