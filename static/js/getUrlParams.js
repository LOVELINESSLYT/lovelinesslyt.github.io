// js获取url后的参数
function getQueryString(name) {
	   var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	   if (result == null || result.length < 1) {
	       return null;
	   }
	   // 汉字编码 ：encodeURI 	汉字解码 ：decodeURI
	   return encodeURI(result[1]);
}