<template>
    <!-- 屏幕右边 -->
    <div class="leftmain">
        <!-- 头部 -->
        <div class="top">
            <div class="lefttoptitle">
                <div class="title">
                  <div class="title-b">零塑生活数据大屏</div>
                  <div class="title-t">
                    <div class="t-tone">
                      <div class="tto-t">
                        出袋数<span style="font-size:10px">(个)</span>
                      </div>
                      <div class="tto-c">
                        <digitalFlop1 />
                      </div>
                    </div>
                    <div class="t-tone">
                      <div class="tto-t">
                        减少碳排放量<span style="font-size:10px">(g)</span>
                      </div>
                      <div class="tto-c">
                        <digitalFlop2 />
                      </div>
                    </div>
                    <div class="t-tone">
                      <div class="tto-t">
                        减少土地污染<span style="font-size:10px">(㎡)</span>
                      </div>
                      <div class="tto-c">
                        <digitalFlop3 />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            <div class="r-toptitle">
              <div class="iconitem">
              </div>
            </div>
        </div>
        <div class="notice-container">
            <div class="notice-items" ref="noticeBox">
                <div class="notice-items-inner" ref="noticeInner">
                    <p>中国每天使用30亿个塑料袋,一年使用1万亿个塑料袋,造成10万吨碳排放。而一个可降解塑料袋能减少0.06平方米土地污染。同时减少0.07克碳排放,一年可减少碳排放7万吨。</p>
                    <p>中国每天使用30亿个塑料袋,一年使用1万亿个塑料袋,造成10万吨碳排放。而一个可降解塑料袋能减少0.06平方米土地污染。同时减少0.07克碳排放,一年可减少碳排放7万吨。</p>
                    <p>中国每天使用30亿个塑料袋,一年使用1万亿个塑料袋,造成10万吨碳排放。而一个可降解塑料袋能减少0.06平方米土地污染。同时减少0.07克碳排放,一年可减少碳排放7万吨。</p>
                    <p>中国每天使用30亿个塑料袋,一年使用1万亿个塑料袋,造成10万吨碳排放。而一个可降解塑料袋能减少0.06平方米土地污染。同时减少0.07克碳排放,一年可减少碳排放7万吨。</p>
                </div>
            </div>
        </div>
        <!-- <dv-decoration-10 style="height:20px;" /> -->
        <!-- 中间 -->
        <div class="center">
          <div class="map1">
          </div>
          <div class="map2">
          </div>
          <lmap />
        </div>
    </div>
</template>
<script>
import lmap from './lmap.vue'
import digitalFlop2 from'./digitalFlop/digitalFlop2.vue'
import digitalFlop3 from'./digitalFlop/digitalFlop3.vue'
import digitalFlop1 from'./digitalFlop/digitalFlop1.vue'
export default {
  components: {
    lmap,digitalFlop1,digitalFlop2,digitalFlop3
  },
  data() {
    return {
      kupBagNum:0,
      kgetUserNum:0,
      dingshi:0,
      keyData:[],
    }
  },
  methods:{
    initHorseLamp () {
      let boxWidth = this.$refs.noticeBox.offsetWidth
      let innerWidth = 0
      let child = this.$refs.noticeInner.childNodes
      let count = 0
      child.forEach(item => {
        if (item.nodeType === 1) {
          innerWidth += parseInt(window.getComputedStyle(item).width.split('px')[0])
          count++
        }
      })
      // innerWidth += boxWidth * (count - 1)
      if (innerWidth > boxWidth) {
        let padding = 0
        let animation = () => {
          padding -= 1
          this.$refs.noticeInner.style.cssText = `transform: translate3d(${padding}px, 0, 0)`
          if (padding === -(innerWidth - parseInt(window.getComputedStyle(child[child.length - 1]).width.split('px')[0]))) {
            padding = 0
            this.$refs.noticeInner.style.cssText = `transform: translate3d(${padding}px, 0, 0)`
          }
          this.animationId = requestAnimationFrame(animation)
        }
        animation()
      }
    }
  },
  mounted() {
    this.initHorseLamp()
  }
}
</script>
<style lang="less" scoped>
.notice-container {
      height: 40px;
      overflow: hidden;
      box-sizing: border-box;
      width: 1068px;
      display: flex;
      align-items: center;
      margin-top: -30px;
      display: flex;
      font-size: 24px;
      top: 200px;
      left: 30px;
      z-index: 1000;
      color: rgb(0, 0, 0);
      background: rgb(163, 169, 170);
      .notice-items {
        margin: 0 0 0 6px;
        flex: 1;
        display: flex;
        overflow: hidden;
        .notice-items-inner {
          display: flex;
          width: 100%;
          p {
            flex-shrink: 0;  // 这个结合父级的flex，可以做到不换行
            // margin-right: 100%; // 这里的需求是一行切换完之后才能看到下一行的需求，所以加了100%的margin
            white-space: nowrap;
          }
        }
      }
    }
.leftmain{
    width: 100%;
    height: 100%;
    font-size: .260417rem;
    color: #ccc;
    display: flex;
    flex-direction: column;
    // 头部
    .top{
        flex: 2.35;
        display: flex;
        position: relative;
        justify-content: space-between;
        .lefttoptitle {
          // margin: auto;
          margin-left: 60px;
          font-size: .3475rem;
          width: 100%;
          .title{
            width: 100%;
            background: rgba(197, 108, 66, 0.5);
            // margin-top: 20px;
            // margin-left: 10px;
            margin: auto;
            background: rgb(255, 255, 255);
            // background: linear-gradient(to right, rgba(255, 255, 255, 0.808), rgba(0, 255, 106, 0.836));
            -webkit-background-clip: text;
            color: transparent;
            font-size: 50px;
            font-weight: 900;
            .title-t{
              height: 145px;
              width: 100%;
              background: rgba(204, 204, 204, 0.705);
              color: transparent;
              -webkit-background-clip: text;
              font-size: 15px;
              font-weight: 400;
              margin-top: 13px;
              display: flex;
              justify-content: space-between;
              .t-tone{
                width: 320px;
                display: flex;
                flex-direction: column;
                .tto-t{
                  font-size: 30px;
                  font-weight: 500;
                }
                .tto-c{
                  font-size: 70px
                }
              }
            }
          }
        };
        // 头部右边
        .r-toptitle {
          display: flex;
          flex-direction: row;
          // icon组
          .iconitem{
            display: flex;
            flex-direction: row;
            margin-top: 30px;
            // icon本身
            .iconlist{
              // icon图标
              display: flex;
              flex-direction: row;
              width: 350px;
              .l-iconlist{
                width: 60px;
                .iconfont{
                  font-size: 50px;
                }
              }
              // 数据
              .r-iconlist{
                width: 200px;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                .r-iconlist-title{
                  font-size: 15px;
                  font-weight: 400;
                  color: rgb(77, 136, 224);
                }
                .r-iconlist-content{
                  display: flex;
                  font-size: 40px;
                }
              }
            }
            
          }
        }
    }
    // 中间
    .center{
        flex: 8.45;
        position: relative;
        .map2{
          width: 900px;
          height: 900px;
          background: url(../assets/images/lbx.png) no-repeat;
          animation: rotate2 20s linear infinite;
          background-size: 100%;
          position: absolute;
          top: 50%;
          z-index: -2;
          left: 50%;
          opacity: 0.6;
          transform: translate(-50%, -50%);
        }
          @keyframes rotate2 {
          
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
        .map1{
          width: 800px;
          height: 800px;
          background: url(../assets/images/jt.png) no-repeat;
          animation: rotate 15s linear infinite;
          background-size: 100%;
          position: absolute;
          top: 50%;
          z-index: -2;
          left: 50%;
          transform: translate(-50%, -50%);
        }
          @keyframes rotate {
          
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
    }
}
</style>