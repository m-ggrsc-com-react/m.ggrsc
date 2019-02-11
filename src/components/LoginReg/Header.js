import React,{Component} from "react" ;

// // 引入样式
import "./Header.less" ;

import {withRouter} from "react-router-dom" ;

class Header extends Component {
    constructor(){
        super();
    }

    goTo(path){
        this.props.history.push(path);
    }

    render(){
        let {CommonLeftIcon,CommonConter,CommonRightIcon} = this.props.Data;
        let path = this.props.RouterPath;
        return (
            <div className="HeaderLoginReg">
                <div className="CommonLeft">
                    <a href="javascript:;" onClick={()=>{
                        this.goTo("/Home")
                    }}>
                        <img src={CommonLeftIcon} alt=""/>
                    </a>
                </div>

                <div className="CommonConter">
                    {CommonConter}
                </div>

                <div className="CommonRight">
                    <a href="javascript:;" onClick={()=>{
                        this.goTo(path)
                    }}                         
                    >
                        {CommonRightIcon}
                    </a>
                </div>
            </div>
        )
    }
}
Header = withRouter(Header);
export default Header ;