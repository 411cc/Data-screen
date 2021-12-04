<template>
  <div class='Usergrowth'>
    <div id="growthtu">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {getusergrowth} from '.././api/api'
export default {
  data() {
  //这里存放数据
    return {
      num:20,
      xday:[],
      yvone:[],
      yvtwo:[],
      nima:[0, 835, 857, 923, 1304, 1428, 997, 894, 975, 990, 1019, 1363, 1700, 1323, 1207, 1211]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bbar(){
      var myChart = echarts.init(document.getElementById("growthtu"))
      var colors=['rgb(211, 119, 58)', 'rgba(25,163,223,1)','rgb(58, 175, 54)']
      var option = option = {
          color:colors,
          legend:{
            icon:'circle',
            top:20,
            textStyle:{
              color:'aliceblue'
            }
          },
         title:{
            padding:[25,0,0,20],
            text:'用户增长',
            textStyle:{
              color : 'aliceblue',
              fontSize:25,
            },
            subtextStyle:{
              color : 'red'
            },
          },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
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
            data: this.xday,
            axisTick:{
                    show:false
                  },
          }
        ],
        yAxis: [
          {
            axisLabel:{
              show:false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            },
            axisTick:{
              show:false
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '现在',
            type: 'bar',
            barWidth: '60%',
            data: this.yvtwo,
            
            color: { // 完成的圆环的颜色
              colorStops: [{
                  offset: 0,
                  color: 'rgb(252, 151, 0)' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: '#f5ef25' // 100% 处的颜色
              }]
            },
          },
          {

            name: '过去',
            type: 'bar',
            color: { // 完成的圆环的颜色
              colorStops: [{
                  offset: 0,
                  color: 'rgb(117, 106, 89)' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgb(117, 106, 89)' // 100% 处的颜色
              }]
            },
            barWidth: '60%',
            data: this.yvone,
          }, 
        ]
      };
      option && myChart.setOption(option);
    },
    ggetusergrowth(){
      var that = this
      getusergrowth().then(res=>{
        var e =['']
        var g =[]
        var h =[0]
        for(var a = 0 ; a<res.data.data.length ; a++){
          var b = ''
          var c = parseInt(res.data.data.length/2)
          var d = res.data.data.length-1
          if(a == 0){
            e.push(0)
          }else if(a == c){
            e.push(c)
          }else if(a == d){
            e.push(d)
          }else{
            e.push(b)
          }
        }
        that.xday = e
        for(var f = 0 ; f<res.data.data.length ; f++){
          g.push(res.data.data[f].numOne)
          h.push(res.data.data[f].numTwo)
        }
        that.yvone = g
        that.yvtwo = h
        that.bbar()
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.bbar();
    this.ggetusergrowth()
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
.Usergrowth{
  width: 100%;
  height: 110%;
  
  #growthtu{
    width: 416px;//525
    height: 280px;//260

  }
}
</style>