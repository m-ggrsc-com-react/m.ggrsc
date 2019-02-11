import React,{Component} from "react" ;

// 引入样式
import "@less/common/HeaderS-common.less" ;

class HeadersCommon extends Component {
    constructor(){
        super();
    }

    render(){
        let {CommonLeftIcon,CommonConter,CommonRightIcon} = this.props.HeadersCommon;
        return (
            <div className="HeadersCommon">
                <div className="CommonLeft">
                    <a href="javascript:history.go(-1)">
                        <img src={CommonLeftIcon} alt=""/>
                    </a>
                </div>

                <div className="CommonConter">
                    {CommonConter}
                </div>

                <div className="CommonRight">
                    <a href="javascript:;">
                        <img src={CommonRightIcon} alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeadersCommon ;