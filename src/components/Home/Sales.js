import React from "react" ;

import HomeTitle from "@common/Home_title.js" ;

const Sales = (props)=>{
    let data = props.data.home1;
    return(
        <div className="sales">
            <HomeTitle title={data.title}/>
            <div>
                <img src={data.image} alt={data.title}/>
            </div>
        </div>
    )
}

export default Sales ;