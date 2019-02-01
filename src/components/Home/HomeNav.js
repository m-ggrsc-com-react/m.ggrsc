import React,{Component} from "react" ;

// 引入组件
import HomeNav_item from "./HomeNav_item" ;

class HomeNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                HomeNav_top:[
                    {
                        gc_id:826,
                        title:"纸品区域",
                        icon:"http://m.ggrsc.com/images/icon/Paper.png"
                    },
                    {
                        gc_id:827,
                        title:"PVC区域",
                        icon:"http://m.ggrsc.com/images/icon/pvc.png"
                    },
                    {
                        gc_id:1153,
                        title:"包装区域",
                        icon:"http://m.ggrsc.com/images/icon/packing.png"
                    },
                    {
                        gc_id:829,
                        title:"个性印刷",
                        icon:"http://m.ggrsc.com/images/icon/printing.png"
                    },
                    {
                        gc_id:309,
                        title:"喷绘材料",
                        icon:"http://m.ggrsc.com/images/icon/Penhui.png"
                    },
                ],
                
                HomeNav_bottom:[
                    {
                        path:"/My",
                        title:"我的商城",
                        icon:"http://m.ggrsc.com/images/icon/mall.png"
                    },
                    {
                        path:"/order_list",
                        title:"我的订单",
                        icon:"http://m.ggrsc.com/images/icon/order.png"
                    },
                    {
                        path:"/Classify",
                        title:"全部分类",
                        icon:"http://m.ggrsc.com/images/icon/catall.png"
                    },
                    {
                        path:"/Shopping-trolley",
                        title:"购物车",
                        icon:"http://m.ggrsc.com/images/icon/shopping.png"
                    },
                    {
                        path:"/shop",
                        title:"店铺街",
                        icon:"http://m.ggrsc.com/images/icon/street.png"
                    }
                ]
            }
        }
    }

    render(props){
        return (
            <ul className="HomeNav">
                {
                    this.state.data.HomeNav_top.map((item,idx)=>{
                        return (
                            <HomeNav_item item={item} key={idx}/>
                        )
                    })
                }
                 {
                    this.state.data.HomeNav_bottom.map((item,idx)=>{
                        return (
                            <HomeNav_item item={item} key={idx}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default HomeNav ;
