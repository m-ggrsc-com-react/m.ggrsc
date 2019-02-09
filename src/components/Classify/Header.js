import React,{Component} from "react" ;

import {Badge} from 'antd';

import HeaderRight from "@common/HeaderRight" ;

class Header extends Component{
    constructor(){
        super();
        
        this.state = {
            dispaly: 'none'
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
            <header className="header">
                <div className="logo">
                    <svg className="icon-svg" aria-hidden="true">
                        <use xlinkHref="#icon-zuobian4"></use>
                    </svg>
                </div>
                <div className="header-wrap">
                    <a href="javascript:;" className="header-inp">
                        <i></i>
                        <span>高档画册</span>
                    </a>
                </div>
                <div className="header-r" onClick={this.handleClick.bind(this)}>
                    <Badge dot>
                        <a href="javascript:;">
                            <svg className="icon-svg" aria-hidden="true">
                                <use xlinkHref="#icon-more-copy"></use>
                            </svg>
                        </a>
                    </Badge>
                    <div style={{display: this.state.dispaly}}>
                        <HeaderRight />
                    </div>
                </div>
            </header>
        )
    }
}


export default Header ;