import React,{Component} from "react" ;

import {withRouter} from "react-router-dom" ;
import HeaderRightContent from "@common/HeaderContent" ;

// 引入路由组件
import Home from "@components/Home" ; 
import Search from "@components/Search" ; 
import Classify from "@components/Classify" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 
import Message from "@/components/Message" ;

class Header extends Component{
    constructor(){
        super();

        this.state = {
            HeaderRightData:[
                {
                    title:"首页",
                    icon:"http://m.ggrsc.com/images/home_w.png",
                    path:"/Home",
                    component:Home				
                },
                {
                    title:"搜索",
                    icon:"http://m.ggrsc.com/images/search_w.png",
                    path:"/Search",
                    component:Search
                },
                {
                    title:"分类",
                    icon:"http://m.ggrsc.com/images/categroy_w.png",
                    path:"/Classify",
                    component:Classify
                },
                {
                    title:"信息",
                    icon:"http://m.ggrsc.com/images/message_w.png",
                    path:"/Message",
                    component:Message
                },
                {
                    title:"购物车",
                    icon:"http://m.ggrsc.com/images/cart_w.png",
                    path:"/Shopping-trolley",
                    component:ShoppingTrolley,
                },
                {
                    title:"我的商城",
                    icon:"http://m.ggrsc.com/images/member_w.png",
                    path:"/My",
                    component:My
                }
            ]
        }
    }

    goTo(path){
        this.props.history.push(path);
    }

    render(){
        return (
            <header className="header">
                <div className="logo">
                    <svg className="icon-svg" aria-hidden="true">
                        <use xlinkHref="#icon-zuobian4"></use>
                    </svg>
                </div>
                <div className="header-wrap" onClick={
                    ()=>{
                        this.goTo("/Search")
                    }
                }>
                    <div href="javascript:;" className="header-inp">
                        <i></i>
                        <span>高档画册</span>
                    </div>
                </div>
                <HeaderRightContent HeaderRightData={this.state.HeaderRightData} />
            </header>
        )
    }
}

Header = withRouter(Header) ;
export default Header ;