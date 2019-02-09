import React,{Component} from "react" ;

// 引入样式
import "./My.less" ;


// 引入组件
import Header from "./MyHeader" ;
import MyContent from "./MyContent"
import ReturnToTheTop from "@common/ReturnToTheTop" ;
import Footer from "@common/Fn" ;

class My extends Component {
    constructor (){
        super();
    }

    render(){
        return (
            <div>
                <Header/>
                <MyContent/>
                <ReturnToTheTop/>
                <Footer/>
            </div>
        )
    }

}

export default My;