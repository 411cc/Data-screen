import Cookies from 'js-cookie'
import store from '@/store/index.js';
const TokenKey = 'agent-token'

export function gettimestamp() {
	let timestamp = uni.getStorageSync("timestamp111")
  return timestamp;
}

export function settimestamp(timestamp) {
	
	uni.setStorageSync("timestamp111", timestamp);
	let newtimestamp = gettimestamp()
	
}

export function removetimestamp() {
	uni.clearStorage()
}
