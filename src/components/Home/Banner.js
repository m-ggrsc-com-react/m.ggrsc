import React from "react" ;

// 引入 antd 组件
import { Carousel } from 'antd';

const Banner = (props)=>{
    return (
        <Carousel autoplay dots="false">
            {
                props.bannerText.adv_list.item.map((item,idx)=>{
                    return (
                        <img src={item.image} key={idx} alt=""/>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner ;