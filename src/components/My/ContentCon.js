import React,{Component} from "react" ;

class ContentCon extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <ul className="ContentCon">
                {
                    this.props.ContentCon.map((item,idx)=>{
                        return (
                            <li key={idx}>
                                <a href="javascript:;">
                                    <img src={item.icon} alt=""/>
                                    <p>{item.character}</p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ContentCon ;