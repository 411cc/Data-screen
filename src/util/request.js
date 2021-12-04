import store from '@/store'

import {
	getToken,
	setToken
} from './auth.js'
import errorCode from './errorCode.js'
import comm from './comm.js'
const baseUrl = comm.baseURL
const loginUrl = '../../pages/login/login'
const request = (options) => {
	// uni.showLoading();
	let config = options;
	let url = options.url;
	if (config.method === 'get' && config.params) {
		let url = config.url + '?';
		for (const propName of Object.keys(config.params)) {
			const value = config.params[propName];
			var part = encodeURIComponent(propName) + "=";
			if (value !== null && typeof(value) !== "undefined") {
				if (typeof value === 'object') {
					for (const key of Object.keys(value)) {
						let params = propName + '[' + key + ']';
						var subPart = encodeURIComponent(params) + "=";
						url += subPart + encodeURIComponent(value[key]) + "&";
					}
				} else {
					url += part + encodeURIComponent(value) + "&";
				}
			}
		}
	}

	return new Promise((resolve, reject) => {
		let token = getToken();
		let header = {};
		if(token!=null){
			header = {token: token}
		}
		let data = options.data
		if(options.params!=null){
			header['content-type'] = 'application/x-www-form-urlencoded';
			data = options.params;
		}
		// console.log(options);
		uni.request({
			method: options.method,
			url: baseUrl + url,
			data: data,
			header: header
		}).then((response) => {
			let [error, res] = response;
			console.log(error);
			if(res==null || res.data==null){
				reject(error)
				console.log(error)
				uni.showToast({
					title: '请求出错了 '+error.errMsg,
					duration: 2000,
					icon: "none"
				});
				return;
			}
			//如果是 401
			if (res.data.code == 401) {
				uni.showToast({
					title: '需要登录',
					duration: 2000,
					icon: "none"
				});
				setToken(null)
				uni.navigateTo({
					url: loginUrl
				});
			}
			resolve(res.data);
		}).catch(error => {
			uni.showToast({
				title: '请求出错了'+error.errMsg,
				duration: 2000,
				icon: "none"
			});
			reject(error)
		})
	});
}
export default request

