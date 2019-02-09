import React,{Component} from "react" ;
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import http from "@/server" ;

class ClssRight extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            gc_id:null
        }
    }
  
    async componentDidMount(){            
        await this.setState({gc_id:this.props.match.params.gc_id}) ;

        const res = await http.get("/api/mobile/index.php?act="+"goods_class&op="+"get_child_all&gc_id="+this.state.gc_id) ; 

    }

    render(props){        
        return (
            <div>商品ID{this.props.match.params.gc_id}</div>
        )
    }

}
ClssRight = withRouter(ClssRight)
export default ClssRight ;