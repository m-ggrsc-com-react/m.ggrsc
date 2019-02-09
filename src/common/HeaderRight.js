import React,{Component} from "react" ;

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 

class HeaderRight extends Component {
    constructor(){
        super() ;
        this.state = {
            data:[
                {
                    title:"首页",
                    icon:"#icon-home3",
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
                },
                {
                    title:"我的商城",
                    icon:"#icon-seeusero",
                    path:"/My",
                    component:My
                }
            ]
        }
    }

    render(){
        return (
            <div className="HeaderRight">
                <span className="arrow"></span>
                <ul>
                    {
                        this.state.data.map((item,idx)=>{
                            return (
                                <li key={item.path}>
                                    <a href="javascript:;">
                                        <svg className="icon-svg" aria-hidden="true">
                                            <use xlinkHref={item.icon}></use>
                                        </svg>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HeaderRight ;