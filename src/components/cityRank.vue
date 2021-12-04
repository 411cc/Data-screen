<template>
  <div class='cityRank'>
    <div id="ranktu">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {getcityrank} from '.././api/api'
export default {
  data() {
  //这里存放数据
    return {
      num:20,
      cityName:[],
      cityValue:[]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bbar(){
      var myChart = echarts.init(document.getElementById("ranktu"))
      // let imgSrc = '../assets/logo.png';
      var option = {
          title:{
            padding:[25,0,0,20],
            text:'前5城市排行',
            textStyle:{
              color : 'aliceblue',
              fontSize:25,
            },
            subtextStyle:{
              color : 'red'
            },
          },
          xAxis: {
            realtimeSort: true,
            axisTick:{
              show:false
            },
            axisLabel:{
              show:false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(120, 160, 236, 1)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            },
            max: 'dataMax'
          },
          yAxis: {
            // realtimeSort: true,
            axisTick:{
              show:false
            },
            axisLabel:{
              show:true,
              fontSize:11,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgb(243, 237, 227)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            type: 'category',
            data: this.cityName,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 4 // only the largest 3 bars will be displayed
          },
          series: [
            {
              realtimeSort: true,
              type: 'bar',
              data: this.cityValue,
              color: { // 完成的圆环的颜色
                  colorStops: [{
                      offset: 0,
                      color: 'rgb(23,114,252)' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#4e8ce9' // 100% 处的颜色
                  }]
              },
            }
          ],
          legend: {
            show: true
          },
          animationDuration: 0,
          animationDurationUpdate: 3000,
          animationEasing: 'linear',
          animationEasingUpdate: 'linear'
        };
      option && myChart.setOption(option);
    },
    getrank(){
      var that = this;
      getcityrank().then(res=>{
        var n = []
        var v = []
        for(var i = 0 ; i< res.data.data.length;i++){
          n.push(res.data.data[i].name)
          v.push(res.data.data[i].num)
        }
        that.cityName = n
        that.cityValue = v
        that.bbar()
      })
      setInterval(()=>{
        setTimeout(()=>{
          getcityrank().then(res=>{
            var n = []
            var v = []
            for(var i = 0 ; i< res.data.data.length;i++){
              n.push(res.data.data[i].name)
              v.push(res.data.data[i].num)
            }
            that.cityName = n
            that.cityValue = v
            that.bbar()
          })
        },0)
      },20000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.bbar();
    this.getrank()
  },
//beforeCreate() {}, //生命周期 - 创建之前
//beforeMount() {}, //生命周期 - 挂载之前
//beforeUpdate() {}, //生命周期 - 更新之前
//updated() {}, //生命周期 - 更新之后
//beforeDestroy() {}, //生命周期 - 销毁之前
//destroyed() {}, //生命周期 - 销毁完成
//activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
.cityRank{
  width: 110%;
  height: 100%;
  
  #ranktu{
    width: 416px;//525
    height: 320px;//260

  }
}
</style>