<template>
  <div class='levelfigure'>
    <div id="leveltu2">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {progressPool} from '../../api/api'
export default {
  data() {
  //这里存放数据
    return {
      num:0,
      ccc:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bbar(){
      var myChart = echarts.init(document.getElementById("leveltu2"))
      // let imgSrc = '../assets/logo.png';
      var option2 = {
    title: [{
        text: this.ccc,
        x: '50%',
        y: '37%',
        textAlign: 'center',
        textStyle: {
            fontSize: '40',
            fontWeight: '500',
            color: '#98b5d2',
            textAlign: 'center',
        },
    }, {
        text: '设备活跃率',
        left: '48%',
        top: '62%',
        textAlign: 'center',
        textStyle: {
            fontSize: '20',
            fontWeight: '600',
            color: 'rgb(75, 139, 221)',
            textAlign: 'center',
        },
    }, ],
    graphic: {
        elements: [{
            type: "image",
            z: 0,
            style: {
                width: 210,
            },
            left: 'center',
            top: "30%",
        }]
    },
    angleAxis: {
        max: 100,
        clockwise: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '160.1%'
    },
    series: [
        {
            type: 'bar',
            startAngle: 100,
            clockwise: true,
            data: [{
                name: 'Total Downloads',
                value: this.num,
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色
                                }]
                            },
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '-100%',
            z: 20,
        },
        {
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#223042',
                    shadowColor: 'rgba(251, 46, 99, 0.1)',
                    shadowBlur: 10,
                }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '-100%',
            z: 1
        },
    ]
};
      myChart.setOption(option2);
    },
    aaar(){
      var that = this
      progressPool().then(res =>{
        var ppol = (res.data[0].value)*1000
        var bbol = ppol
        var ccol = bbol.toString().slice(0,2)
        that.num = ccol
        var gou = '%'
        that.ccc = ccol.toString() + gou
        that.bbar()
      })
      setInterval(()=>{
        progressPool().then(res =>{
          var ppol = (res.data[0].value)*1000
          var bbol = ppol
          var ccol = bbol.toString().slice(0,2)
          that.num = ccol
          var gou = '%'
          that.ccc = ccol.toString() + gou
          that.bbar()
        })
      },3000000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.bbar();
    this.aaar()
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
.main{
  width: 100%;
  height: 100%;
  
  #leveltu2{
    width: 210px;//525
    height: 210px;//260
    margin-top: 20px;

  }
}
</style>