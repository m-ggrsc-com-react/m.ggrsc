import React,{Component} from "react" ;

class ConentTitle extends Component {
    constructor(props){
        super(props);
    }

    render(props){
        return (
            <div className="ConentTitle">
                <h3>
                    <img src={this.props.ContentTitle.icon} alt=""/>
                    {this.props.ContentTitle.title}
                </h3>
                <div>
                    <span>{this.props.ContentTitle.more}</span>
                    <img src={this.props.MoreIcons} alt=""/>
                </div>
            </div>
        )
    }
}

export default ConentTitle ;