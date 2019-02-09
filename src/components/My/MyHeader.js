import React,{Component} from "react" ;

// 引入组件
import HeaderTop from "@common/HeaderCommon" ;
import UsarName from "./UserName" ;
import HeaderBottom from "./HeaderBottom" ;

class MyHeader extends Component {
    constructor(){
        super();
        
        this.state = {
            SettingsIcon:"http://m.ggrsc.com/images/set_w.png",          
        }

    }

    render(){
        return (
            <div className="MyHeader">
                <HeaderTop SettingsIcon={this.state.SettingsIcon} />
                <UsarName/>
                <HeaderBottom/>
            </div>
        )
    }
}

export default MyHeader ;