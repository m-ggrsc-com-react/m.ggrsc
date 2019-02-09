import React,{Component} from "react" ;

class Content extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div className="Content">
                <p>热卖搜索</p>
                <ul className="Content_top">
                    {
                        this.props.data.map((item,idx)=>{
                            return (
                                <li key={idx}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Content ;