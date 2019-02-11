import React,{Component} from "react" ;

import { NavLink , Route, Switch, Redirect,withRouter} from "react-router-dom" ;

import Header from "./Header" ;
import Register from "./Register" ;
import RegisterMobile from "./RegisterMobile" ;

import Footer from "@common/Fn" ;


// 引入样式
import "./Reg.less" ;

class Reg extends Component {
    constructor(props){
        super(props);

        this.state ={
            Data:{
                CommonLeftIcon:"http://m.ggrsc.com/images/home_b.png",
                CommonConter:"会员注册",
                CommonRightIcon:"登录"
            },

            DataCon:[
                {
                    icon:"http://m.ggrsc.com/images/reg_r.png",
                    title:"普通注册",
                    path:"/Register",                    
                },
                {
                    icon:"http://m.ggrsc.com/images/regm_r.png",
                    title:"手机注册",
                    path:"/RegisterMobile",                    
                }
            ]
            
        }
    }

    render(props){
        return (            
            <div className="Reg">
                <Header Data={this.state.Data} RouterPath="/Login" />
                               
                <div className="RegCon">
                    <div className="RegConTop">
                        <NavLink to="/Reg/Register"><img src="http://m.ggrsc.com/images/reg_r.png" alt=""/>普通注册</NavLink>
                        <NavLink to="/Reg/RegisterMobile"><img src="http://m.ggrsc.com/images/regm_r.png" alt=""/>手机注册</NavLink>                        
                    </div>                    
                </div>  
                <Switch>                        
                    <Route path="/Reg/Register" component={Register} />
                    <Route path="/Reg/RegisterMobile" component={RegisterMobile} />
                    <Redirect from="/Reg" to="/Reg/Register"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

Reg = withRouter(Reg);
export default Reg ;