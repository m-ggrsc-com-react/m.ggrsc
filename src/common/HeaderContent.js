import React,{Component} from "react" ;

import {Badge} from 'antd';
import HeaderRight from "@common/HeaderRight" ;

import "@less/common/HeaderContent.less" ;

class HeaderContent extends Component {
    constructor(){
        super();

        this.state = {
            dispaly: 'none',                        
        };

    }

    async handleClick() {
        if(this.state.dispaly=="none"){
            this.setState({
                dispaly:"block"
            })
        }else if(this.state.dispaly=="block"){
            this.setState({
                dispaly:"none"
            })
        }        
    }

    render(){
        return (
            <div className="header-r" onClick={this.handleClick.bind(this)}>
                <Badge dot>
                    <a href="javascript:;">
                        <svg className="icon-svg" aria-hidden="true">
                            <use xlinkHref="#icon-more-copy"></use>
                        </svg>
                    </a>
                </Badge>
                <div style={{display: this.state.dispaly}}>
                    <HeaderRight data={this.props.HeaderRightData} />
                </div>
            </div>
        )
    }
}

export default HeaderContent ;