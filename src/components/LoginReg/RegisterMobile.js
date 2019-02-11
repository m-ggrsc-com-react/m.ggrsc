import React,{Component} from "react" ;

import "./RegisterMobile.less" ;
import Agreement from "./Agreement" ;

class RegisterMobile extends Component {
    constructor(){
        super();

        this.state= {
            RegLoginBtnData:{
                Agreement:"同意",
                Zcxy:"用户注册协议",
                ForgetPassword:null,
                BtnData:"注 册"
            }
        }
    }

    render(){
        return (
            <div className="RegisterMobile">
                <ul className="form-box">
                    <li>
                        <h4>手机号</h4>
                        <div className="input-box">
                            <input type="text" placeholder="输入手机号" />
                            <a href="javascript:;" id="send">获取手机验证码</a>
                        </div>
                    </li>

                    <li>
                        <h4>短信验证</h4>
                        <div className="input-box">
                            <input type="text" placeholder="请输入短信验证码" />
                        </div>
                    </li>

                    <li>
                        <h4>验 证 码</h4>
                        <div className="input-box">
                            <input type="text" placeholder="输入4位验证码" />
                            <a href="javascript:;" id="Yzm">验证码</a>
                        </div>
                    </li>

                </ul>
                <Agreement RegLoginBtnData={this.state.RegLoginBtnData} />
                <div className="form-notes">
                    绑定手机不收任何费用，一个手机只能绑定一个账号，若需修改或解除已绑定的手机，请登录商城PC端进行操作。
                </div>
            </div>
        )
    }
}

export default RegisterMobile ;