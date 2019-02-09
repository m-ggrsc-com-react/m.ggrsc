import React,{Component} from "react" ;

// 引入样式
import "@less/common/HeaderCommon.less"

// 引入组件
import HeaderRightContent from "@common/HeaderContent" ;

// 引入路由组件
import Home from "@components/Home" ; 
import Search from "@components/Search" ; 
import Classify from "@components/Classify" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 
import Message from "@/components/Message" ;

class HeaderCommon extends Component {
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
                }
            ]
        }
    }

    render(){
        return (
            <div className="HeaderTop">
                <img src={this.props.SettingsIcon} alt=""/>
                <HeaderRightContent HeaderRightData={this.state.HeaderRightData}/>
            </div>
        )
    }
}

export default HeaderCommon ;