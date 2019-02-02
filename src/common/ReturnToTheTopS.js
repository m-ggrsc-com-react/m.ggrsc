import React,{Component} from "react" ;

import { BackTop } from 'antd';

class ReturnToTheTopS extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <BackTop>
                <div className="ReturnToTheTopS"></div>
            </BackTop>
        )
    }
}

export default ReturnToTheTopS