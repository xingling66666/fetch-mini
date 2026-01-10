function request(url,method,responseType,func) {

	if([url,method,responseType,func].indexOf(null) != -1 || /text|json|blob|arrayBuffer|formData/.test(responseType) === false || /GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH|CONNECT|TRACE/.test(method) === false 

	)
	{
    console.error("参数有误")
    return
	}
fetch(url,{
		method: method
}).then(res => res[responseType]()).then(data => {
		func(data)
	}
	)
}
