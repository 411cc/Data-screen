import axios from "axios";

var baseUrl = 'https://api.lingsulife.com'
//地图
export function mapline(){
  var urll = baseUrl + '/ls/common/screen/client/statistical/active/area/fx'
  return axios({
    methods: "get",
    url:urll,
    // headers:{
    //   "token":'01fb019bfb0743830bcb64c417efee0'
    // },
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
};
//进度条
export function progressPool(){
  var urll = baseUrl + '/ls/common/screen/client/statistical/active'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//出袋数
export function upBagNum(){
  var urll = baseUrl + '/ls/common/screen/v1/count/outbag'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//今日流量
export function uptrafficNum(){
  var urll = baseUrl + '/ls/common/screen/v1/today/traffic'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//获得用户数
export function getUserNum(){
  var urll = baseUrl + '/ls/common/screen/v1/count/users'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//24小时内出袋
export function tfoutbag(){
  var urll = baseUrl + '/ls/common/screen/outbag/statistical/area'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//设备活跃比
export function statistical(){
  var urll = baseUrl + '/ls/common/screen/v1/device/active'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//最近领带用户
export function recentUser(){
  var urll = baseUrl + '/ls/common/screen/v1/outbag/detail'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//时段趋势
export function timetrend(){
  var urll = baseUrl + '/ls/common/screen/v1/period/timetrend'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//城市排行
export function getcityrank(){
  var urll = baseUrl + '/ls/common/screen/v1/outbag/top/5'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//用户增长
export function getusergrowth(){
  var urll = baseUrl + '/ls/common/screen/v1/user/growth'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
//出袋
export function getupBar(){
  var urll = baseUrl + '/ls/common/screen/v1/outbag/recently'
  return axios({
    methods: "get",
    url:urll,
    params:{
      "token":'01fb019bfb0743830bcb64c417efee03'
    }
  })
}
export default{
  mapline,progressPool,upBagNum,tfoutbag,statistical,recentUser,timetrend,getcityrank,getusergrowth,getupBar
}