import React,{Component} from "react" ;

import HomeAlike from "@common/Home_alike.js" ;
import Sales from "./Sales" ;
import HomeAlikeImg from "@common/homeAlikeImg.js" ;
import HomeAlikeImgBottom from "@common/homeAlikeImgBottom.js" ;

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
                <HomeAlikeImg data={data.HomeAlikeDatazp.home4}/>
            </div>
        )
    }

}

export default ContentTop ;