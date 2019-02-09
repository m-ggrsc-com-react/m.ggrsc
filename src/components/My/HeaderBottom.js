import React,{Component} from "react" ;

class HeaderBottom extends Component {
    constructor(){
        super() ;
    }

    render(){
        return (
            <div className="member-collect">
                <div className="memberLeft">
                    <em>0</em>
                    <p>商品收藏</p>
                </div>
                <div className="memberCenter">
                    <em>0</em>
                    <p>店铺收藏</p>
                </div>
                <div className="memberRight">
                    <img src="http://m.ggrsc.com/images/goods-browse_w.png" alt=""/>
                    <p>我的足迹</p>
                </div>
            </div>
        )
    }
}

export default HeaderBottom ;