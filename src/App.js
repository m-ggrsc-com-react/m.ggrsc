import React,{Component} from "react" ;

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 
import Message from "@components/Message" ;
import Productlist from "@components/Productlist" ;

import Reg from "@components/LoginReg/Reg" ;
import Login from "@components/LoginReg/Login" ;



class App extends Component {
	
	constructor (){
		super();

		this.state = {
			Route:[
				{                                      
                    path:"/Home",
                    component:Home				
                },
                {                                      
                    path:"/Classify",
                    component:Classify
                },
                {                                      
                    path:"/Search",
                    component:Search
                },
                {                                      
                    path:"/Shopping-trolley",
                    component:ShoppingTrolley,
                    dot:true,
                },
                {                                      
                    path:"/My",
                    component:My
                },
                {
                    path:"/Message",
                    component:Message
                },
                {
                    path:"/Productlist/:gc_id",
                    component:Productlist
                },
                {
                    path:"/Reg",
                    component:Reg
                },
                {
                    path:"/Login",
                    component:Login
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









