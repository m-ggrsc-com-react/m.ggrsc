import React,{Component} from 'react';

// 引入样式
import "@less/common/Footer.less" ;

// 引入组件
import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 

// 路由组件
import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';


class Footer extends Component{

	constructor(props){
		
		super(props);
		
		this.state = {
			Footer:[
				{
					title:"首页",
					icon:"#icon-home",
					path:"/Home",
					component:Home				
				},
				{
					title:"分类",
					icon:"#icon-fenlei",
					path:"/Classify",
					component:Classify
				},
				{
					title:"搜索",
					icon:"#icon-sousuo",
					path:"/Search",
					component:Search
				},
				{
					title:"购物车",
					icon:"#icon-icon1",
					path:"/Shopping-trolley",
					component:ShoppingTrolley,
					dot:true,
				},
				{
					title:"我的商城",
					icon:"#icon-seeusero",
					path:"/My",
					component:My
				}
			],			

		}

	}

	render (){
		return (
			<div>
				<footer>
					<div>
						{
							this.state.Footer.map(item=>{
								return (				
									<NavLink to={ item.path } key={item.path}>
										<svg className="icon-svg" aria-hidden="true">
											<use xlinkHref={item.icon}></use>
										</svg>
										{item.title}
									</NavLink>
								)
							})
						}


					</div>
				</footer>
				<Switch>
					{
						this.state.Footer.map(item=>{
							return (				
								<Route path={item.path} component={item.component} key={item.path}></Route>									
							)
						})
					}
					<Redirect from="/" to="/Home"/>
				</Switch>
			</div>
		)
	}
}

{/* <TabBar			
	onClick = { this.current }
	tabBarPosition="bottom"
>
	{
		this.state.Footer.map(item=>{
			return (								
				<TabBar.Item
					onClick = { this.current }
					icon = {{ uri: item.icon }}
					title = { item.title }
					dot = { item.dot ? item.dot : "" }
					key = { item.path }
				>							
				</TabBar.Item>
			)
		})
	}										
</TabBar> */}
Footer = withRouter(Footer);
export default Footer;