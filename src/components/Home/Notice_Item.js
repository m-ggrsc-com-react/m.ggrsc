import React,{Component} from "react" ;

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

// const Notice_Item = (props)=>{
//     let data = props.data;

//     return (
        // <div className="Notice_Item">
        //     <img src="http://m.ggrsc.com/images/gg_w.png" alt=""/>
        //     <div className="swiper-container">                
        //         <div className="swiper-wrapper">
        //             {
        //                 props.data.map((item,idx)=>{
        //                     return (
        //                         <a className="swiper-slide" href="javascript:;" key={idx}>
        //                             {item.title}
        //                         </a>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </div>
//     )
// }

class Notice_Item extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var swiper = new Swiper('.swiper-container', {
        loop: true,
            autoplay:{
                delay: 2500,
                disableOnInteraction: false,
            },
        direction: 'vertical',           
        });
    }

    render(props){
        return (
            <div className="Notice_Item">
            <img src="http://m.ggrsc.com/images/gg_w.png" alt=""/>

            <div className="swiper-container">                
                 <div className="swiper-wrapper">
                    {
                        this.props.data.map((item,idx)=>{
                            return (                                
                                <a href="javascript:;" key={idx} className="swiper-slide">{item.title}</a>
                            )
                        })
                        
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default Notice_Item ;