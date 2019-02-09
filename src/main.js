import React,{Component} from "react" ;
import {render} from "react-dom" ;

// 引入阿里巴巴图标库
import "./iconfont/iconfont.js" ;
import "./iconfont/iconfont.less" ;

// 清除游览器默认样式
import "./less/reset.less" ;

// 引入路由
import {HashRouter} from "react-router-dom";


// 引入组件
import App from "./App" ;

render(
	<HashRouter>
		<App/>
	</HashRouter>
	,
	document.querySelector("#app")
)