<template>
  <div class='digitalFlop'>
    <dv-digital-flop :config="config"  style="height:70px;margin-top:5px"/>
  </div>
</template>

<script>
import {uptrafficNum} from'../../api/api'
export default {
  data() {
  //这里存放数据
    return {
      config:{
        number:[],
        content: '{nt}',
        textAlign:'left',
        style:{
          fontSize:70,
          fill:'rgb(77, 140, 223)'
        }
      },
      totalNum:{
        number:[],
        content: '{nt}',
        textAlign:'left',
        style:{
          fontSize:70,
          fill:'rgb(77, 140, 223)'
        }
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    uupBagNum(){
      var that = this
      uptrafficNum().then(res =>{
        that.totalNum.number[0] = res.data.data
        that.config = {...that.totalNum}
      })
      setInterval(()=>{
        setTimeout(()=>{
          uptrafficNum().then(res =>{
            that.totalNum.number[0] = res.data.data
            that.config = {...that.totalNum}
          },0)
        },0)
      },30000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.uupBagNum()
  },
}
</script>
<style lang="less">
.digitalFlop{
  width: 100%;
}

</style>