function request(url,method,responseType,func) {
  	if([url,method,responseType,func].indexOf(null) != -1 || [url,method,responseType,func].indexOf(undefined) != -1) {
  	  throw "参数错误！请确保所有实参已填写正确！"
  	}
  	if(/GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH|CONNECT|TRACE/.test(method) === false) {
  	  throw "参数错误！无效的请求方式"
  	}
  	if(/text|json|blob|arrayBuffer|formData/.test(responseType) === false) {
  	  throw "参数错误！无效的响应体解析方式"
  	}
  fetch(url,{
  		method: method
  }).then(res => res[responseType]()).then(data => func(data)
  	)
  	.catch(error => {
  	  func("网络请求出错！" + error.stack)
  	})
  }
request("http://vhsf4d0eb40.lxoffice.work/","GET","text",data => {
  console.log(data)
})
