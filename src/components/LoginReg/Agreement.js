import React,{Component} from "react" ;

import "./Agreement.less" ;

class Agreement extends Component {
    constructor(){
        super();
    }

    render(){
        let {Agreement,Zcxy,ForgetPassword,BtnData} = this.props.RegLoginBtnData;
        return (
            <div className="Agreement">
                <div className="remember-form">
                    <input type="checkbox" id="Agreement"  />
                    <label htmlFor="Agreement">{Agreement}</label>
                    <a href="javascript:;" className="Xy">{Zcxy}</a>
                    <a href="javascript:;" className="ForgetPassword">{ForgetPassword}</a>
                </div>
                <button>{BtnData}</button>
            </div>
        )
    }
}

export default Agreement ;