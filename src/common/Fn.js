import React,{Component} from "react" ;

import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 

console.dir(Classify)

import "@less/common/Footer.less" ;

class Fn extends Component{
    constructor(props){
        super(props);
        
        this.change = this.change.bind(this);

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
    
    change(item){
        this.props.history.push(item.path);
        
    }
    
    
    render(props){
        return (
            <div>
                <footer>
                    {
                        this.state.Footer.map(item=>{
                            return (				
                                <div key={item.path} onClick={() =>{
                                    this.change(item)
                                }}>
                                    <svg className="icon-svg" aria-hidden="true">
                                        <use xlinkHref={item.icon}></use>
                                    </svg>
                                    {item.title}
                                </div>
                            )
                        })
                    }
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
                </footer>
            </div>
        )
    }
}
Fn = withRouter(Fn)
export default Fn ;