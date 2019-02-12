import React,{Component} from "react" ;

import {withRouter} from "react-router-dom" ;

import http from "@/server" ;


class ContentRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            gc_id:this.props.gc_id,
            data:[]
        }
    }


    async componentWillMount(){
        const res = await http.get("/api/mobile/index.php?act="+"goods_class&op=get_child_all&gc_id="+this.state.gc_id) ; 
        await this.setState({
            data:res.data.datas.class_list
        })
    }
    
    goTo(gc_id){
        this.props.history.push("/Productlist/gc_id="+gc_id);
    }


    render(){
        if(this.state.data.length>0){
            return (
                <div className="ContentRight">
                    <div className="Child-list">
                        {                                
                            this.state.data.map(item=>{
                                return (
                                    <div className="List" key={item.gc_id}>
                                        <div className="ListTitle">
                                            <p>
                                                <span></span>
                                                {item.gc_name}
                                            </p>
                                            <a href="javascript:;"><img src="http://m.ggrsc.com/images/arrow_right_b.png" alt=""/></a>
                                        </div>
                                        <div className="ListCon">
                                            {
                                                item.child.map(childItem=>{
                                                    return (
                                                        <a key={childItem.gc_id} href="javascript:;" onClick={()=>{
                                                            this.goTo(childItem.gc_id)
                                                        }} >{childItem.gc_name}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }else{
            return "";
        }
    }
}
ContentRight = withRouter(ContentRight);
export default ContentRight ;