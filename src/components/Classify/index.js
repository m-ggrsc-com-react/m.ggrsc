import React,{Component} from "react" ;

// 样式文件
import "./Classify.less";

// 引入组件
import Header from "./Header" ;
import Content from "./Content" ;


class Classify extends Component {
    constructor (){
        super();
    }

    render(){
        return (
            <div id="Classify">
                <Header/>
                <Content/>
            </div>
        )
    }

}

export default Classify;