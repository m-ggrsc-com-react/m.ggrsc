import React,{Component} from "react" ;

import "@less/common/HeaderRight.less" ;
import {withRouter} from 'react-router-dom';

class HeaderRight extends Component {
    constructor(props){
        super(props) ;
        this.change = this.change.bind(this)
    }

    change(path){
        this.props.history.push(path);     
    }

    render(props){
        return (
            <div className="HeaderRight">
                <span className="arrow"></span>
                <ul>
                    {
                        this.props.data.map((item,idx)=>{
                            return (
                                <li key={item.path} onClick={()=>{
                                    this.change(item.path)
                                }}>
                                    <a href="javascript:;">
                                        <img src={item.icon} alt=""/>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
HeaderRight = withRouter(HeaderRight);
export default HeaderRight ;