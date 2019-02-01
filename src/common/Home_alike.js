import React,{Component} from "react" ;
import HomeTitle from "./Home_title";

class HomeAlike extends Component {
    constructor(props){
        super(props);
        console.log(this.props.data.home2)
    }

    render(props){
        let data = this.props.data.home2;
        return (
            <div className="nctouch-home-layout">
                <HomeTitle title={data.title}/>
                <div className="left">
                    <img src={data.square_image} alt={data.square_data}/>
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

export default HomeAlike;