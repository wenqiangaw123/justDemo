/*
* @Author: zhiqiang.wen
* @Date:   2017-06-08 23:03:17
* @Last Modified by:   zhiqiang.wen
* @Last Modified time: 2017-06-09 10:12:15
*/
$(function(){
	var iframe = $("#iframeId");
	$(".zero").on("click",function(){
		iframe.attr("src","aaa.html");
	});
	$(".one").on("click",function(){
		iframe.attr("src","bbb.html");
	});
	$(".two").on("click",function(){
		iframe.attr("src","ccc.html");
	});
});
