<template>
  <div class="linechart">
    <div id="body">
    </div>
  </div>
</template>

<script>
import echarts from '../../public/static/lib/echarts.min.js';
import {timetrend} from '.././api/api'
export default {
  data() {
    return {
      todaydata:[],
      yesterday:[]
    }
  },
  mounted(){
    this.lline()
    this.ttimetrend()
  },
  methods:{
    lline(){
      //初始化实例
      var myChart = echarts.init(document.getElementById('body'));
      window.onresize = function() {
        myChart.resize();
      };
      var colors=['rgb(211, 119, 58)', 'rgba(25,163,223,1)','rgb(58, 175, 54)']
      //指定图标配置项
      var option = {
        color:colors,
        legend:{
          icon:'circle',
          textStyle:{
            color:'aliceblue'
          }
        },
        title:{
          padding:[10,0,0,80],
          text:'24小时出袋',
          textStyle:{
            color : 'aliceblue',
            fontSize:40,
          },
          subtextStyle:{
            color : 'red'
          },
        },
        xAxis: {
          axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(120, 160, 236, 1)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
          type: 'category',
          data: ['0','', '', '', '', '', '6', '','','','','','12','','','','','','18','','','','','23'],
          axisLabel:{
            color : '#ccc',
          },
          handle: {
            show: true,
            color: '#7581BD'
          }
        },
        yAxis: {
          type: 'value',
          axisTick:{
            show:false
          },
          axisLine: {
              show: false,
            },
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
            }
        },
        series: [
          
          {
            name: '昨日出袋',
            smooth: true,
            data: this.yesterday,
            type: 'line',
            lineStyle: {
              normal: {
                  width: 3,
                  color: "rgb(211, 119, 58)", // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            symbol: 'circle',
            symbolSize: 0,
            axisTick:{
              show:false
            },
            axisLabel:{
              show:false
            },
            areaStyle: { //区域填充样式
              normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(211, 119, 58)"
                },
                {
                  offset: 1,
                  color: "rgba(25,163,223, 0)"
                }], false),
                  shadowColor: 'rgb(218, 42, 42)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
          {
            name: '今日出袋',
            smooth: true,
            data: this.todaydata,
            type: 'line',
            lineStyle: {
              normal: {
                  width: 3,
                  color: "rgba(25,163,223,1)", // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            symbol: 'circle',
            symbolSize: 0,
            axisTick:{
              show:false
            },
            axisLabel:{
              show:false
            },
            areaStyle: { //区域填充样式
              normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(29, 98, 177)"
                },
                {
                  offset: 1,
                  color: "rgba(25,163,223, 0)"
                }], false),
                  shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
        ]
      }
      //指定图标
      myChart.setOption(option);
    },
    ttimetrend(){
      var that = this
      timetrend().then(res =>{
        var yes = []
        for(var i = 0 ; i <24 ; i++){
          yes.push(res.data.data.yesterday[i].data)
        }
        that.yesterday = yes
        var todat = []
        for(var i = 0 ; i <24 ; i++){
          if(i<10){
            todat.push(res.data.data.today[i].data)
          }
          if(i>9){
            var c = res.data.data.today[i].data
            if(c  == 0){
              break
            }else{
              todat.push(res.data.data.today[i].data)
            }
          }
        }
        that.todaydata = todat
        that.lline()
      })
      setInterval(()=>{
        setTimeout(()=>{
          timetrend().then(res =>{
            var yes = []
            for(var i = 0 ; i <24 ; i++){
              yes.push(res.data.data.yesterday[i].data)
            }
            that.yesterday = yes
            var todat = []
            for(var i = 0 ; i <24 ; i++){
              if(i<10){
                todat.push(res.data.data.today[i].data)
              }
              if(i>9){
                var c = res.data.data.today[i].data
                if(c  == 0){
                  break
                }else{
                  todat.push(res.data.data.today[i].data)
                }
              }
            }
            that.todaydata = todat
            that.lline()
          })
        },0)
      },1500000)
    }
  },
}
</script>

<style>
#body{
  width: 100%;
  height: 120%;
  
  /* background: #5470C6; */
}
.linechart{
  width: 115%;
  height: 100%;
  
}
</style>