import React,{Component} from "react" ;

// 引入样式
import "./Shopping-trolley.less"

// 引入组件
import HeadersCommon from "@common/HeaderS-common" ;
import ShoppingContent from "./ShoppingContent" ;

class ShoppingTrolley extends Component {
    constructor (){
        super();

        this.state={
            HeadersCommon:{
                CommonLeftIcon:"http://m.ggrsc.com/images/arrow_left_b.png",
                CommonConter:"购物车",
                CommonRightIcon:"http://m.ggrsc.com/images/more_b.png"
            }
        }

    }

    render(){
        return (
            <div className="Shopping-trolley">
                <HeadersCommon HeadersCommon={this.state.HeadersCommon} />
                <ShoppingContent/>
            </div>
        )
    }

}

export default ShoppingTrolley;