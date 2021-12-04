<template>
  <div class='levelfigure'>
    <dv-active-ring-chart :config="config" style="width:220px;height:220px;font-size:10px;margin-top:10px" />
  </div>
</template>

<script>
import {statistical} from '../.././api/api'
export default {
  data() {
  //这里存放数据
    return {
      config:{
        color:['rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)','rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)','rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)','rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)','rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)','rgb(23, 115, 253)','rgb(63, 174, 255)','rgb(36, 132, 255)','rgb(165, 249, 254)','rgb(90, 213, 255)'],
        lineWidth:20,
        radius:80,
        digitalFlopStyle:{
          style:{
            textAlign: 'top',
            height: 80,
            translate: [1, 100],
            fontSize: 10,
          },
          toFixed:1,
          rowGap:1000,
          lineHeight: 10,
          fill: '#fff'
        },
        activeRadius:85 ,
        data:[
          {
            name: '周口',
            value: 55,
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
      ]
      },
      config2:{
                color:['rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)','rgb(4, 123, 241)','rgba(67, 150, 233, 0.959)','rgb(4, 123, 241)','rgba(141, 187, 233, 0.959)','rgba(141, 215, 233, 0.959)'],
        lineWidth:20,
        radius:80,
        digitalFlopStyle:{
          style:{
            textAlign: 'top',
            height: 80,
            translate: [1, 100],
            fontSize: 10,
          },
          toFixed:1,
          rowGap:1000,
          lineHeight: 10,
          fill: '#fff'
        },
        activeRadius:85 ,
        data:[
          {
            name: '周口',
            value: 55,
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
      ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getlevel(){
      var that = this
      statistical().then(res=>{
        var citylevel = []
        for(var i = 0;i<res.data.data.length;i++){
          var zu = {}
          zu.name = res.data.data[i].area
          zu.value = res.data.data[i].proportion
          citylevel.push(zu)
        }
        that.config2.data = citylevel
        that.config = {...that.config2}
      })
      setInterval(()=>{
        setTimeout(()=>{
          statistical().then(res=>{
            var citylevel = []
            for(var i = 0;i<res.data.data.length;i++){
              var zu = {}
              zu.name = res.data.data[i].area
              zu.value = res.data.data[i].proportion
              citylevel.push(zu)
            }
            that.config2.data = citylevel
            that.config = {...that.config2}
          }) 
        },0)
      },3600000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getlevel()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
}
</script>
<style lang="less">
.levelfigure{
width: 220px;
height: 220px;
}

</style>