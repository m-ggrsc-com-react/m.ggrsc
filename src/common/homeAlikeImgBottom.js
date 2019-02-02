import React,{Component} from "react" ;

class HomeAlikeImgBottom extends Component {
    constructor(props){
        super(props);
    }

    render(props){
        let data = this.props.data;
        return (
            <div className="HomeAlikeImgBottom">
                <div className="left">
                    <img src={data.square_image} alt={data.rectangle1_data}/>
                </div>
                <div className="right_top">
                    <img src={data.rectangle1_image} alt={data.rectangle1_data}/>
                </div>
                <div className="right_bottom">                
                    <img src={data.rectangle2_image} alt={data.rectangle2_data}/>
                </div>
            </div>
        )
    }
}

export default HomeAlikeImgBottom;