import React,{Component} from "react" ;

// 引入组件
import Header from "../Classify/Header" ;

class Productlist extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="Productlist">
                <Header/>
            </div>
        )
    }
}

export default Productlist ;