import React,{Component} from "react" ;

class SearchHeader extends Component{
    constructor(){
        super();
        
        this.state = {
            dispaly: 'none'
        };
    }


    render(){
        return (
            <header className="header">
                <div className="logo">
                    <a href="javascript:history.go(-1)">
                        <svg className="icon-svg" aria-hidden="true">
                            <use xlinkHref="#icon-zuobian4"></use>
                        </svg>
                    </a>
                </div>
                <div className="header-wrap">
                    <a href="javascript:;" className="header-inp">
                        <input type="text" placeholder="高档画册"/>
                        <i></i>
                    </a>
                </div>
                <div className="header-r">
                    搜索
                </div>
            </header>
        )
    }
}


export default SearchHeader ;