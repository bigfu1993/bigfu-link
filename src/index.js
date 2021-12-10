class FuLink {
	config = {}
	instance = null
	constructor(initConfig) {
		this.mergeConfig(initConfig)
		this.createInstance()
	}
	// 合并link实例配置项目
	mergeConfig(config) {
		Object.assign(this.config, config)
	}
	createXhr() {
		let xhr = null
		const { method, path, data } = this.config
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest()
		} else {
			try {
				xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
			} catch {
				xhr = new window.ActiveXObject('smxml2.XMLHTTP')
			}
		}
		return xhr
	}
	setRequestHeader(xhr, config) {
		const { header } = config
		// 请求头
		xhr.setRequestHeader('Authorization', 'Bearer ....')
		return xhr
	}
	createInstance() {
		this.instance = new Promise((resolve, reject) => {
			let xhr = null
			const { method, path, data } = this.config
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest()
			} else {
				try {
					xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
				} catch {
					xhr = new window.ActiveXObject('smxml2.XMLHTTP')
				}
			}
			// // 请求头
			// xhr.setRequestHeader('Authorization', 'Bearer ....')
			// // 成功
			// xhr.onreadystatechange = function () {
			// 	if (xhr.readyState == 4 && xhr.status == 200) {
			// 		resolve(xhr.responseText)
			// 	}
			// }
			// // 失败
			// xhr.onerror = (err) => {
			// 	reject(err)
			// }
			// xhr.open(method, path, true)
			// xhr.send(data)
		})
		return this.instance
	}
	create(reqConf) {
		let { method } = reqConf
		switch (method.toLocaleUpperCase()) {
			case 'get':
				this.get(reqConf)
				break
			case 'post':
				this.post(reqConf)
				break
			case 'put':
				this.put(reqConf)
				break
			case 'delete':
				this.delete(reqConf)
				break
			case 'jsonp':
				this.jsonp(reqConf)
				break
			default:
				this.get(reqConf)
				break
		}
	}
	get() {
		console.log('get req')
	}
	post() {
		console.log('post req')
	}
	put() {
		console.log('put req')
	}
	delete() {
		console.log('delete req')
	}
	jsonp() {
		console.log('jsonp req')
	}
}
export default FuLink
console.log('init success')
let fLink = new FuLink()
console.log(fLink.get())
console.log('+++++++++++++')
console.log(FuLink)
console.log('+++++++++++++')
