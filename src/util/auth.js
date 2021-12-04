import Cookies from 'js-cookie'
import store from '@/store/index.js';
const TokenKey = 'agent-token'

export function getToken() {
	let token =  uni.getStorageSync("token222");
  return token;
}

export function setToken(token) {
	console.log('11'+token)
	uni.setStorageSync("token222", token);
	let newtoken = getToken()
	console.log(newtoken)
}

export function removeToken() {
	uni.clearStorage()
}
