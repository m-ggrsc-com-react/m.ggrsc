import React,{Component} from "react" ;

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 

import "@less/common/Footer.less" ;

class Fn extends Component{
    constructor(){
        super();
                    
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

    render(){
        return (
            <footer>
                {
                    this.state.Footer.map(item=>{
                        return (				
                            <div  key={item.path}>
                                <svg className="icon-svg" aria-hidden="true">
                                    <use xlinkHref={item.icon}></use>
                                </svg>
                                {item.title}
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}

export default Fn ;