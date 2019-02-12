import React,{Component} from "react" ;

import ContentLeft from "./ContentLeft" ;
import ContentRight from "./ContentRight" ;

class Content extends Component {
    constructor(){
        super();
        
        this.state={
            gc_id:825,
        }
    }

    async change(gc_id){
        // let target = event.target.parentNode.tagName=="A" || event.target.tagName=="A";                   
        // if(target){
        //     event.target.classList.add("active");
        //     event.target.parentNode.classList.add("active");
        // } 
        await this.setState({
            gc_id:gc_id
        })
        // console.log(this.state.gc_id)
    }

    render(){
        return (
            <div className="ContentClassify">
                <ContentLeft change={this.change.bind(this)} />
                <ContentRight gc_id={this.state.gc_id} />
            </div>
        )
    }
}

export default Content ;