// 线上
const baseURL ="https://api.lingsulife.com:9090"
// const baseURL = "https://api.lingsulife.com:9999"
// const baseURL = "https://api.lingsulife.com"
// 联客通
// const baseURL = "https://www.liankt.com"
//本地
// const baseURL ="http://192.168.1:8080"
// const baseURL ="https://api.lingsulife.com:7043"
//0是零塑 1是链客通
export  function isLkt(){
	if(baseURL == "https://www.liankt.com"){
		return true;
	}
	return false
}
export function getLogo(){
	let oem = isLkt();
	if	(!oem){
		return 'https://lssh.oss-cn-shenzhen.aliyuncs.com/miniapp/static/static/imges/img20.png'
	}
	return 'https://lssh.oss-cn-shenzhen.aliyuncs.com/miniapp/static/static/oem/lkt_logo2.png'
}
// const baseURL = "http://192.168.1.58:8080"
// const baseURL = "http://192.168.0.237:8080"

export default{
	baseURL
}