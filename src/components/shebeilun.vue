<template>
  <div class="main">
    <div class="kuang">
      <!-- <dv-border-box-10></dv-border-box-10> -->
    </div>
    
    <div class="nititle">
      <div class="ntime">时间</div>
      <div class="nuser">设备编号</div>
      <div class="ncity">城市</div>
      <div class="ntype">类型</div>
    </div>
    <div class="page-example3">
      <vue-seamless-scroll :data="listData"  >
        <ul class="ul-scoll">
          <li v-for="(item, index) in listData" :key="index"
           :class="[{
              lunitem1:index%2 ==0,
            },{
              lunitem2:index%2 !=0,
            },
            ]
          ">
              <span class="time" v-text="item.outTime"></span>
              <span class="user" v-text="item.deviceId"></span>
              <span class="city" v-text="item.city"></span>
              <span class="type" v-text="item.outType"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
 
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import {getupBar} from '../api/api'
export default {
    name: 'Example3',
    components: {
        vueSeamlessScroll
    },
    data() {
      // 这里存放数据
      return {
      listData: [{
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      },
      {
        name:'1',
        time:'2'
      }
      ],
      }
    },
    // 监听属性 类似于data概念
    computed: {
      defaultOption () {
        console.log('cccccc')
        return {
          step: 3, // 数值越大速度滚动越快
          limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    },
    watch:{
    },
    // 方法集合
    methods: {
      getjinlun(){
        var that = this
        getupBar().then(res=>{
          for(var sb = 0 ;sb<res.data.data.length ; sb++){
            var sl = res.data.data[sb].deviceId.split('')
            sl.splice(2, 6, "***");
            var nmasil = sl.join('')
            res.data.data[sb].deviceId = nmasil
          }
          that.listData = res.data.data
        })
        setInterval(()=>{
          setTimeout(()=>{
            getupBar().then(res=>{
              for(var sb = 0 ;sb<res.data.data.length ; sb++){
                var sl = res.data.data[sb].deviceId.split('')
                sl.splice(2, 6, "***");
                var nmasil = sl.join('')
                res.data.data[sb].deviceId = nmasil
              }
              that.listData = res.data.data
            })
          },0)
        },26000)
      }
    },
    // 监控data中的数据变化
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getjinlun()
    }
}
</script>
 
<style lang="less" scoped>
//@import url(); 引入公共css类
.page-example3{
  width: 448px;//518
  height: 230px;//285
  margin-left: -36px;
  overflow: hidden;
  .ul-scoll{
    margin-block-start: 0px;
    margin-block-end: 0px;
    li{
      list-style:none ;
      height: 40px;
      font-size: 23px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
  }
}
.nititle{
  margin-left: 4px;
  padding: 8px 10px 0 20px;
  height: 40px;
  width: 378px;
  display: flex;
  background: rgb(59, 59, 59);
  color: aliceblue;
  .ntime{
    width: 100px;
    font-size: 23px;
  }
  .nuser{
    width: 130px;
    font-size: 23px;
  }
  .ncity{
    width: 90px;
    font-size: 23px;
  }
  .ntype{
    padding-left: 10px;
    width: 70px;
    font-size: 23px;
    box-sizing: border-box;
  }
}
.kuang{
  width: 415px;
  height: 280px;
  position: absolute;
  top: 0;
}
.main{
  position: relative;
  margin-left: 15px;
  width: 100%;
  height: 100%;
}
.iimg{
  width: 50px;
}
.lunitem1{
  color: aliceblue;
  background: rgb(87, 88, 90);
}
.lunitem2{
  color: aliceblue;
  background: rgb(141, 144, 146);
}
.date{
  margin-top: 8px;
  line-height: 40px;
  width: 200px;
}
.title{
  margin-top: 4px;
  width: 100px;
}
.time{
  margin-top: 8px;
  width: 120px;
}
.user{
  margin-top: 6px;
  
  width: 120px;
}
.city{
  margin-top: 7px;
  width: 80px;
}
.type{
  margin-top: 7px;
  width: 80px;
}
</style>　　