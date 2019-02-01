import React from "react" ;

const Header = (props)=>{
    return (
        <header id="header" className="">
            <div className="logo"></div>
            <div className="header-wrap">
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

export default Header ;