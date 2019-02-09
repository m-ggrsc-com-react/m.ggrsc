import React,{Component} from "react" ;

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 
import Message from "@components/Message" ;


class App extends Component {
	
	constructor (){
		super();

		this.state = {
			Route:[
				{
                    // title:"首页",
                    // icon:"#icon-home",
                    path:"/Home",
                    component:Home				
                },
                {
                    // title:"分类",
                    // icon:"#icon-fenlei",
                    path:"/Classify",
                    component:Classify
                },
                {
                    // title:"搜索",
                    // icon:"#icon-sousuo",
                    path:"/Search",
                    component:Search
                },
                {
                    // title:"购物车",
                    // icon:"#icon-icon1",
                    path:"/Shopping-trolley",
                    component:ShoppingTrolley,
                    dot:true,
                },
                {
                    // title:"我的商城",
                    // icon:"#icon-seeusero",
                    path:"/My",
                    component:My
                },
                {
                    path:"/Message",
                    component:Message
                }
			]
		}
	}


	render(){
		return (			
			<Switch>
				{
					this.state.Route.map(item=>{
						return (				
							<Route path={item.path} component={item.component} key={item.path}></Route>									
						)
					})
				}
				<Redirect from="/" to="/Home"/>
			</Switch>
		)
	}

}

App = withRouter(App) ;

export default App;









