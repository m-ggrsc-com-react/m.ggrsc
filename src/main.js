import React,{Component} from "react" ;
import {render} from "react-dom" ;

// 清除游览器默认样式
import "./less/reset.less" ;


// 引入组件
import App from "./App" ;

render(
	<App/>,
	document.querySelector("#app")
)
