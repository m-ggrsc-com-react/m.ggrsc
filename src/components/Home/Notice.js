import React,{Component} from "react" ;

import NoticeItem from "./Notice_Item" ;

class Notice extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[
                {
                    title:"天采11月 · 大爆料，看这一篇就够了！"
                },
                {
                    title:"上海天采董事长刘军卫游学日本，匠心制造7天探秘之旅"
                },
                {
                    title:"举办5届，累计培训近千位广告人，这堂课究竟有什么魅力？"
                },
                {
                    title:"天采董事长刘军卫受邀出席腾讯营销云大会“智慧营销·云中开启”"
                },
                {
                    title:"大数据时代“标识、广告产业新生态”高峰论坛在京隆重召开！"
                },
                {
                    title:"天采董事长刘军卫：与智者同行，得大智慧；与强者同行，能得天下"
                }
            ],
            NoticeDate:"",
        }
    }

    render(props){
        return (
            <div className="Notice">
                <img className="Notice_img" src="http://m.ggrsc.com/images/rd_w.png" alt=""/>
                <NoticeItem data={this.state.data}/>
                <a href="javascript">更多<i>></i></a>
            </div>
        )
    }
    
}

export default Notice ;