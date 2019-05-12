/*代码片段一 B*/
// var name = "The Window";

// var object = {
// 	name : "My Object",
// 	getNameFunc : function(){
// 		return function() {
// 			return this.name;
// 		};
// 	}
// };
// alert(object.getNameFunc()()); // The Window; 
/*代码片段一 E*/


/*代码片段二 B*/
// var name  = "The Window";
// var object = {
// 	name : "My Object",
// 	getNameFunc :function(){
// 		var that = this;
// 		return function(){
// 			return that.name;
// 		};
// 	}
// }
// alert(object.getNameFunc()()); // My Object
/*代码片段二 E*/

/*代码片段一 this与that的运用
	防止调用者为全局变量
	2131231
*/