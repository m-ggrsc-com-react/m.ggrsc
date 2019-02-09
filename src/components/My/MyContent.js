import React,{Component} from "react" ;

// 引入组件
import Indent from "./Indent" ;
import ContentTitle from "./ContentTitle" ;


class MyContent extends Component {
    constructor(){
        super();

        this.state = {
            IndentData:[
                {
                    ContentTitle:{
                        title:"我的订单",
                        more:"查看全部订单",
                        icon:"http://m.ggrsc.com/images/mc_01.png",
                    }
                },              
                {
                    ContnetCon:[
                        {
                            icon:"http://m.ggrsc.com/images/mcc_01.png",                        
                            character:"代付款"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_02.png",                        
                            character:"待收货"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_03.png",                        
                            character:"待自提"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_04.png",                        
                            character:"待评价"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_05.png",                        
                            character:"退款/退货"
                        },
                    ]
                }
            ],
            Property:[
                {
                    ContentTitle:{
                        title:"我的财产",
                        more:"查看全部财产",
                        icon:"http://m.ggrsc.com/images/mc_02.png",
                    }
                },
                {
                    ContnetCon:[
                        {
                            icon:"http://m.ggrsc.com/images/mcc_06_b.png",                                                            
                            character:"预付款"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_07_b.png",                        
                            character:"充值卡"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_08_b.png",                        
                            character:"代金券"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_09_b.png",                        
                            character:"红包"
                        },
                        {
                            icon:"http://m.ggrsc.com/images/mcc_10_b.png",                        
                            character:"积分"
                        },
                    ]
                }
            ],
            IndentDataBt:[
                {
                    ContentTitle:{
                        title:"邀请返利",
                        more:"查看全部订单",
                        icon:"http://m.ggrsc.com/images/mc_05.png",
                    }
                },
                {
                    ContentTitle:{
                        title:"收货地址管理",
                        more:null,
                        icon:"http://m.ggrsc.com/images/mc_03.png",
                    }
                },
                {
                    ContentTitle:{
                        title:"用户设置",
                        more:null,
                        icon:"http://m.ggrsc.com/images/mc_04.png",
                    }
                },
            ],
            moreIcons:"http://m.ggrsc.com/images/arrow_right_b.png"
        }

    }

    render(){
        return (
            <div className="MyContent">
                
                {/* 我的订单 */}
                <Indent 
                IndentData={this.state.IndentData}
                MoreIcons={this.state.moreIcons}
                />
                
                {/* 我的财产 */}
                <Indent 
                IndentData={this.state.Property}
                MoreIcons={this.state.moreIcons}
                />

                {/* 邀请返利 */}
                <ContentTitle 
                ContentTitle={this.state.IndentDataBt[0].ContentTitle}
                MoreIcons={this.state.moreIcons} />

                {/* 收货地址管理 */}
                <ContentTitle 
                ContentTitle={this.state.IndentDataBt[1].ContentTitle}
                MoreIcons={this.state.moreIcons} />

                {/* 用户设置 */}
                <ContentTitle 
                ContentTitle={this.state.IndentDataBt[2].ContentTitle}
                MoreIcons={this.state.moreIcons} />
            </div>            
        )
    }
}

export default MyContent ;