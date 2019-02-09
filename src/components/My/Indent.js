import React,{Component} from "react" ;

import ContentTitle from "./ContentTitle" ;
import ContentCon from "./ContentCon" ;


class Indent extends Component {
    constructor(props){
        super(props);

        this.state = {
            ContentTitle:this.props.IndentData[0].ContentTitle,
            MoreIcons:this.props.MoreIcons,
            ContentCon:this.props.IndentData[1].ContnetCon
        }

    }

    render(props){                
        return (
            <div className="Indent">
                <ContentTitle ContentTitle={this.state.ContentTitle} MoreIcons={this.state.MoreIcons} />
                <ContentCon ContentCon={this.state.ContentCon}  />
            </div>
        )
    }
}

export default Indent ;