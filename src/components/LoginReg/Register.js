import React,{Component} from "react" ;

// 引入组件
import RegisterInput from "./RegisterInput" ;
import Agreement from "./Agreement" ;

class Register extends Component {
    constructor(){
        super();

        this.state = {
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
            <div className="Register">
                <RegisterInput/>
                <Agreement RegLoginBtnData={this.state.RegLoginBtnData}  />
            </div>
        )
    }
}

export default Register ;