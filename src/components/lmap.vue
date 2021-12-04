<template>
	<div id="ccc">
		<div id="caonima"></div>
	</div>
</template>
<script>
import echarts from '../../public/static/lib/echarts.min.js';
import {mapline} from '../api/api'
export default {
  data() {
    return {
      from:[],
      to:[],
      pointfrom:[],
      pointto:[]
    }
  },
  mounted(){
    this.mapp()
  },
  components: {
    mapline,
  },
  methods: {
    mapp() {
      mapline().then(res=>{
        var pointdata = res.data
        for(var i = 0 ; i < pointdata.length;i++) {
          this.pointfrom.push(pointdata[i].from)
          this.pointto.push(pointdata[i].to)
        }
        this.drawLine();
      })
    },
    drawLine(){
      var uploadedDataURL = 'static/map/china.json';
      var myChart = echarts.init(document.getElementById("caonima"))
      var mapData = [];
      for (var i = 0; i < this.pointfrom.length; i++) {
        mapData.push({
          name:'',
          value: parseInt((Math.random() + 1) * 30),
        })
      }
      var that = this
      function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var ggeoCoord = that.pointfrom[i];
          var geoCoord = ggeoCoord.split(",");
          res.push({
              name: '',
              value: geoCoord.concat(data[i].value),
          });
        }
        return res;
      }
      var that = this
      function convertToLineData(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var ffrom = that.pointfrom[i]
            var ffrom = that.pointfrom[i].split(",")
            var tto = that.pointto[i]
            var tto = that.pointto[i].split(",")
              res.push([
                  {
                      coord: ffrom,
                  },   
                  {
                      coord: tto,
                  },
              ]);
          }
          return res;
      }
      $.getJSON(uploadedDataURL, function (geoJson) {
          echarts.registerMap('echarts', geoJson);
          var optionMap = {
              timeline: {
                  show: false,
              },
              baseOption: {
                  geo: {
                      show: true,
                      map: 'echarts',
                      roam: true,
                      zoom: 1.2,
                      center: [104.348024, 35.463161],
                      label: {
                          emphasis: {
                              show: false,
                          },
                      },
                      itemStyle: {
                          normal: {
                              borderColor: '#1e9eff',
                              borderWidth: 1,
                              areaColor: {
                                  type: 'radial',
                                  x: 0.5,
                                  y: 0.5,
                                  r: 0.8,
                                  colorStops: [
                                      {
                                          offset: 0,
                                          // 0% 处的颜色
                                          color: 'rgba(0, 0, 1, 0.0)',
                                      },
                                      {
                                          offset: 1,
                                          // 100% 处的颜色
                                          color: 'rgba(0, 0, 0, .3)',
                                      },
                                  ],
                              },
                              shadowColor: '#048db6',
                              shadowOffsetX: 0,
                              shadowOffsetY: 0,
                              shadowBlur: 10,
                          },
                          emphasis: {
                              // 鼠标悬浮高亮
                              areaColor: 'gray',
                              borderWidth: 0,
                          },
                      },
                  },
              },
              options: [
                  {
                      xAxis: {
                          show: false,
                      },
                      yAxis: {
                          show: false,
                      },
                      series: [
                          {
                              type: 'effectScatter',
                              coordinateSystem: 'geo',
                              data: convertData(mapData),
                              symbolSize: function (val) {
                                  return val[2] / 6;
                              },
                              showEffectOn: 'render',
                              rippleEffect: {
                                  brushType: 'stroke',
                              },
                              label: {
                                  normal: {
                                      formatter: '{b}',
                                      position: 'right',
                                      show: true,
                                  },
                              },
                              itemStyle: {
                                  normal: {
                                      color: '#85abd4',
                                      shadowBlur: 10,
                                      shadowColor: '#85abd4',
                                  },
                              },
                          },
                          {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 10,
                                trailLength: 0.01,
                                symbol: 'pin',
                                symbolSize: 10,
                                color: '#bbc9d4',
                            },
                            lineStyle: {
                                normal: {
                                    color: '#1eadd4',
                                    width: 1,
                                    opacity: 1,
                                    curveness: 0.1,
                                },
                            },
                            data: convertToLineData(mapData),
                          },                     
                      ],
                  },
              ],
          };
          myChart.setOption(optionMap);
      });
    }
  }
}
</script>
<style lang="less">
#ccc{
  width: 100%;
  height: 100%;
}
  #caonima{
    width: 100%;
    height: 100%;
  }
</style>