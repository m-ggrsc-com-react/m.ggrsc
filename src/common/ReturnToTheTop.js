import React,{Component} from "react"

import {withRouter} from "react-router-dom" ;

class ReturnToTheTop extends Component{
    constructor(){
        super()
    }

    // 返回顶部
    goTo(){
        let scrollToTop = window.setInterval(function() {
          let pos = window.pageYOffset;
          if ( pos > 0 ) {
              window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
          } else {
              window.clearInterval( scrollToTop );
          }
      }, 2);
    }

    // 路由跳转
    goToLogin(path){
        this.props.history.push(path)
    }

    render(){
        return(
            <ul className="ReturnToTheTop">
                <li onClick={()=>{
                    this.goToLogin("/Login")
                }}>登录</li>
                <li onClick={()=>{
                        this.goToLogin("/Reg")
                    }
                }>注册</li>
                <li>反馈</li>
                <li>帮助</li>
                <li onClick={()=>{
                    this.goTo()
                }}>返回顶部</li>
            </ul>
        )
    }
}
ReturnToTheTop = withRouter(ReturnToTheTop) ;
export default ReturnToTheTop ;