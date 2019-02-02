import React,{Component} from "react" ;

import HomeAlike from "@common/Home_alike" ;
import Sales from "./Sales" ;
import HomeAlikeImg from "@common/HomeAlikeImg.js"
import HomeAlikeImgBottom from "@common/HomeAlikeImgBottom" ;
import Poster from "@common/poster" ;

class ContentTop extends Component {
    constructor(props){
        super(props);
    }

    render(props){

        let data = this.props.data;
        return (
            <div className="HomeAlikeImg">
                <Sales data={data.SalesData}/>
                <HomeAlike data={data.HomeAlikeData}/>
                <HomeAlikeImgBottom data={data.HomeAlikeDatazp.home4}/>
                <div className="posterImg">
                    <Poster data={data.HomeAlikeDataYS.home1}/>
                </div>

                <HomeAlikeImg data={data.HomeAlikeDataDXZM.home2}/>

                <div className="posterImg2">
                    <Poster data={data.HomeAlikeDataZS.home1}/>
                </div>
                
                <HomeAlikeImgBottom data={data. HomeAlikeDataBGSB.home4}/>
            </div>
        )
    }

}

export default ContentTop ;