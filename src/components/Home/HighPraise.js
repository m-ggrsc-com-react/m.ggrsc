import React,{Component} from "react" ;

class HighPraise extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let data = this.props.data;
        return (
            <div className="HighPraise">
                <div className="HighPraise_Title">
                    {data.title}
                    <div className="HighPraise_TitleBottom">
                        <span>小编向你推荐以下产品</span>
                        <div></div>
                    </div>
                </div>
                <ul className="HighPraise_Content">
                    {
                        data.item.map(item=>{
                            return (
                                <li key={item.goods_id}>
                                    <a href="javascript:;">
                                        <img src={item.goods_image} alt=""/>
                                    </a>
                                    <div className="HighPraise_ContentBottom">
                                        <a href="javascript:;">{item.goods_name}</a>
                                        <p>￥：{item.goods_promotion_price}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HighPraise ;