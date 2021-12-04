<template>
    <div class="map">
        <div class="righttop">
          <div class="r-t-top">
            <div class="r-t-l">
              <div class="r-t-l-t">
                <div class="rtlt-t">
                  <div class="rtlttl">
                    今日流量
                  </div>
                  <div class="rtttr" style="margin-top:10px">
                    <digitalFlop4 />
                  </div>
                </div>
                <div class="rtlt-t" style="margin-top:10px">
                  <div class="rtlttl">
                    用户数
                  </div>
                  <div class="rtttr">
                    <digitalFlop5 />
                  </div>
                </div>
              </div>
            </div>
            <div class="r-t-r">
              <div class="rtr-l">
                <levelfigure1 />
                <levelfigure2 />
              </div>
            </div>
          </div>
        </div>
        <div class="rightbbig">
          <div class="rightbottom">
            <!-- 1 ↓👇-->
            <div class="nearuser">
              <oldlun />
              <shebeilun />
            </div>
            <!-- 2 ↓👇-->
            <div class="cityactive">
              <linechart />
            </div>
            <!-- 3 ↓👇-->
            <div class="equipmentout">
              <cityRank />
              <Usergrowth />
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import nearuserlun from'./nearuserlun.vue'
import linechart from'./linechart.vue'
import digitalFlop4 from'./digitalFlop/digitalFlop4.vue'
import digitalFlop5 from'./digitalFlop/digitalFlop5.vue'
import levelfigure1 from './levelgroup/levelfigure1.vue'
import levelfigure2 from './levelgroup/levelfigure2.vue'
import levelfigure3 from './levelgroup/levelfigure3.vue'
import oldlun from './oldlun.vue'
import cityRank from'./cityRank'
import shebeilun from './shebeilun.vue'
import {tfoutbag,progressPool,statistical} from '../api/api'
import Usergrowth from './Usergrowth.vue'
export default {    
  components:{
    nearuserlun,linechart,levelfigure1,levelfigure2,levelfigure3,
    oldlun,shebeilun,cityRank,digitalFlop4,digitalFlop5,Usergrowth,
    Usergrowth
  },
  data(){
      return{
        keyData:[],
        activeData:[],
        dingshi:0,
        adingshi:0,
        bform:[
          'key0',
          'key2',
          'key3'],
        config:{
          value:1,
          colors: ['#77c4ff', 'rgb(20, 75, 224)'],
          borderGap:5,
          borderWidth:10,
          lineDash: [10, 2],
          borderWidth:0,
          formatter:''
        },
      }
  },
  methods: {
    ttfoutbag(){
      statistical().then(res=>{
        var that = this;
        var alength = res.data.length
        var a1 = res.data[0].type
        var a2 = res.data[0].value
        var a3 = res.data[1].type
        var a4 = res.data[1].value
        var a5 = res.data[2].type
        var a6 = res.data[2].value
        var a7 = []
        a7.push(a1,a2,a3,a4,a5,a6)
        that.activeData = a7
        that.adingshi++
        setInterval(()=>{
          if(that.adingshi < (alength/3)-1){
            var a1 = res.data[3*that.adingshi+0].type
            var a2 = res.data[3*that.adingshi+0].value
            var a3 = res.data[3*that.adingshi+1].type
            var a4 = res.data[3*that.adingshi+1].value
            var a5 = res.data[3*that.adingshi+2].type
            var a6 = res.data[3*that.adingshi+2].value
            var a7 = []
            a7.push(a1,a2,a3,a4,a5,a6)
            that.activeData = a7
            that.adingshi++
          }else{
            that.adingshi = 0
            var a1 = res.data[3*that.adingshi+0].type
            var a2 = res.data[3*that.adingshi+0].value
            var a3 = res.data[3*that.adingshi+1].type
            var a4 = res.data[3*that.adingshi+1].value
            var a5 = res.data[3*that.adingshi+2].type
            var a6 = res.data[3*that.adingshi+2].value
            var a7 = []
            a7.push(a1,a2,a3,a4,a5,a6)
            that.activeData = a7
          }
        },300000)
      })
      progressPool().then(res=>{
        var that = this;
        var ppol = (res.data[0].value)*1000
        var bbol = ppol
        var ccol = bbol.toString().slice(0,2)
        that.config = {
          value:ccol,
          colors: ['#77c4ff', 'rgb(20, 75, 224)'],
          borderGap:5,
          borderWidth:10,
          lineDash: [10, 2],
          borderWidth:0,
          formatter:''
        }
        console.log(that.config.value)
      })
      setInterval(()=>{
        progressPool().then(res=>{
          var that = this;
          var ppol = (res.data[0].value)*1000
          var bbol = ppol
          var ccol = bbol.toString().slice(0,2)
          that.config = {
            value:ccol,
            colors: ['#77c4ff', 'rgb(20, 75, 224)'],
            borderGap:5,
            borderWidth:10,
            lineDash: [10, 2],
            borderWidth:0,
            formatter:''
          }
          console.log(that.config.value)
        })
      },3000000)
      tfoutbag().then(res=>{
        var that = this;
        var dlength = res.data.length
        var c1 = res.data[0].x+res.data[0].y+res.data[0].z
        var c2 = res.data[1].x+res.data[1].y+res.data[1].z
        var c3 = res.data[2].x+res.data[2].y+res.data[2].z
        var c4 = res.data[3].x+res.data[3].y+res.data[3].z
        var c5 = res.data[4].x+res.data[4].y+res.data[4].z
        var c6 = res.data[5].x+res.data[5].y+res.data[5].z
        var c7 = []
        c7.push(c1,c2,c3,c4,c5,c6)
        that.keyData = c7
        that.dingshi++
        setInterval(()=>{
          if(that.dingshi < (dlength/6)-1){
            var c1 = res.data[6*that.dingshi+0].x+res.data[6*that.dingshi+0].y+res.data[6*that.dingshi+0].z
            var c2 = res.data[6*that.dingshi+1].x+res.data[6*that.dingshi+1].y+res.data[6*that.dingshi+1].z
            var c3 = res.data[6*that.dingshi+2].x+res.data[6*that.dingshi+2].y+res.data[6*that.dingshi+2].z
            var c4 = res.data[6*that.dingshi+3].x+res.data[6*that.dingshi+3].y+res.data[6*that.dingshi+3].z
            var c5 = res.data[6*that.dingshi+4].x+res.data[6*that.dingshi+4].y+res.data[6*that.dingshi+4].z
            var c6 = res.data[6*that.dingshi+5].x+res.data[6*that.dingshi+5].y+res.data[6*that.dingshi+5].z
            var c7 = []
            c7.push(c1,c2,c3,c4,c5,c6)
            that.keyData = c7
            that.dingshi++
          }else{
            that.dingshi = 0
            var c1 = res.data[6*that.dingshi+0].x+res.data[6*that.dingshi+0].y+res.data[[6*that.dingshi+0]].z
            var c2 = res.data[6*that.dingshi+1].x+res.data[6*that.dingshi+1].y+res.data[[6*that.dingshi+1]].z
            var c3 = res.data[6*that.dingshi+2].x+res.data[6*that.dingshi+2].y+res.data[[6*that.dingshi+2]].z
            var c4 = res.data[6*that.dingshi+3].x+res.data[6*that.dingshi+3].y+res.data[[6*that.dingshi+3]].z
            var c5 = res.data[6*that.dingshi+4].x+res.data[6*that.dingshi+4].y+res.data[[6*that.dingshi+4]].z
            var c6 = res.data[6*that.dingshi+5].x+res.data[6*that.dingshi+5].y+res.data[[6*that.dingshi+5]].z
            var c7 = []
            c7.push(c1,c2,c3,c4,c5,c6)
            that.keyData = c7
          }
        },3000000)
      })
    },
  },
  mounted() {
  }
}
</script>
<style lang="less">
.map{
    width: 100%;
    height: 900px;
    /* background-color: darkgray;*/
    color: rgb(75, 139, 221);
    font-size: .260417rem;
    // display: flex;
    flex-direction: column;
}

.righttop{
    // flex: 2;
    text-align: center;
    display: flex;
    height: 238px;
    flex-direction: column;
    box-sizing: border-box;
    // position: relative;
      .r-t-top{
        height: 238px;
        display: flex;
        .r-t-l{
          width: 370px;
          height: 238px;
          box-sizing: border-box;
          .rtlt-t{
            width: 370px;
            margin-top: 10px;
            height: 120px;
            display: flex;
            .rtttr{
              width: 370px;
              font-size: 80px;
              margin-left: 30px;
            }
            .rtlttl{
              margin-left: 20px;
              width: 20px;
              font-size: 21px;
              font-weight: 600;
            }
          }
        }
        .r-t-r{
          width: 390px;
          height: 258px;
          box-sizing: border-box;
          .rtr-l{
            width: 400px;
            height: 250px;
            display: flex;
          }
        }
      }
      .r-t-bottom{
        height: 100px;
        // flex: 1;
        .percentList{
          display: flex;
          height: 100px;
          .percent-l{
            display: flex;
            height: 100px;
            flex-direction: column;
            justify-content: center;
            margin-left: 40px;
            .pl-t{
              width: 100%;
              display: flex;
              justify-content: left;
              font-size: 15px;
            }
            .pl-c{
              font-size: 40px;
            }
          }
        }
      }
}

    
.rightbbig{
  // height: 1px;
  position: relative;
  box-sizing: border-box;
  .rightbottom{
    width: 93.9%;
    height: 842px;
    position: absolute;
    text-align: center;
    box-sizing: border-box;
    // display: flex;
    flex-direction: column;
    .nearuser{
      height: 280px;
      justify-content: space-between;
      display: flex;
    }
    .cityactive{
      margin-left: -80px;
      height: 280px;
      // border: 1px solid #ccc;
    }
    .equipmentout{
      height: 280px;
      display: flex;
      // border: 1px solid #ccc;

    }
  }
  .rrightbottom{
    width: 97.5%;
    height: 842px;
    position: absolute;
    // z-index: -1;
  }
}

</style>