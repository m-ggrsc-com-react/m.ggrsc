import React,{Component} from "react" ;

import HomeTitle from "./Home_title" ;
import HomeAlikeImg from "./homeAlikeImg" ;

class HomeAlike extends Component {
    constructor(props){
        super(props);
    }

    render(props){
        let data = this.props.data.home2;
        return (
            <div className="homeAlike">
                <HomeTitle title={data.title}/>
                <HomeAlikeImg data={data} />
            </div>
        )
    }
}

export default HomeAlike;