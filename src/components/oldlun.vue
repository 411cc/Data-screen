<template>
  <div class="main">
    
    <div class="nititle">
      <div class="ntime">时间</div>
      <div class="nuser">用户</div>
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
              <span class="user" v-text="item.userName"></span>
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
import {recentUser} from '../api/api'
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
          step: 5, // 数值越大速度滚动越快
          limitMoveNum: 20, // 开始无缝滚动的数据量 this.dataList.length
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
        recentUser().then(res=>{
          that.listData = res.data.data

          // var ajinlun = res.data[0].value
          // var bjinlun = ajinlun.split('--')
          // console.log(bjinlun)
          // var cjinlun = []
          // for(var i = 0;i < bjinlun.length;i++){
          //   if(bjinlun[i].indexOf("<br />") != -1){
          //     var guo = bjinlun[i].split("<br />")
          //     cjinlun.push(guo[0])
          //     cjinlun.push(guo[1])
          //   }else{
          //     cjinlun.push(bjinlun[i])
          //   }
          // }
          // var d = []
          // for(var i = 0 ; i < 9 ;i++){
          //   d.push({
          //     img:cjinlun[i*3],
          //     name:cjinlun[i*3+1],
          //     time:cjinlun[i*3+2]
          //   })
          // }
          // this.listData = []
          // this.listData = d
        })
        setInterval(()=>{
          setTimeout(()=>{
            recentUser().then(res=>{
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
  padding: 8px 10px 0 20px;
  background-size: 80% 100%;
  height: 40px;
  width: 378px;
  display: flex;
  margin-left: 4px;
  background: rgb(20, 53, 124);
  color: aliceblue;
  .ntime{
    width: 100px;
    font-size: 23px;
  }
  .nuser{
    width: 120px;
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
  height: 200px;
  position: absolute;
  top: 0;
}
.main{
  position: relative;
  width: 100%;
  height: 100%;
}
.iimg{
  width: 50px;
}
.lunitem1{

  color: aliceblue;
  background: rgb(11, 78, 160);
}
.lunitem2{

  color: aliceblue;
  background: rgb(120, 129, 141);
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