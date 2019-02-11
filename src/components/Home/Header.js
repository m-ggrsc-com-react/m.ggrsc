import React,{Component} from "react" ;

import {withRouter} from "react-router-dom" ;

class Header extends Component{
    constructor(){
        super();

    }

    goTo(path){
        this.props.history.push(path);
    }

    render(){
        return (
            <header id="header" className="">
                <div className="logo"></div>
                <div className="header-wrap" onClick={
                    ()=>{
                        this.goTo("/Search")
                    }
                }
                
                >
                    <a href="javascript:;" className="header-inp">
                        <i></i>
                        <span>高档画册</span>
                    </a>
                </div>
                <div className="header-r">
                    <a href="javascript:;">
                        <i className="message"></i>
                    </a>
                </div>
            </header>
        )
    }
}
Header = withRouter(Header) ;
export default Header ;