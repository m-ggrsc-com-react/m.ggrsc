import React,{Component} from "react" ;


import http from "@/server" ;

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';


// 引入组件
import ClassRight from "./ClassRight" ;


class ClassLeft extends Component {
    constructor(){
        super();

        this.state = {
            data:[],
            ClassRightDataId:null
        }
    }

            
    change(gc_id){
        // const res = await http.get("/api/mobile/index.php?act="+"goods_class&op="+"get_child_all&gc_id="+gc_id) ; 
        // await this.setState({ClassRightData:res.data.datas.class_list}) ;
        this.props.history.push({pathname : this.props.match.url+"/"+gc_id,state:{gc_id}});
    }

    async componentDidMount(){
        const res = await http.get("/api/mobile/index.php?act="+"goods_class") ; 
        await this.setState({data:res.data.datas.class_list}) ;      
    }
    
    render(){
        return (
            <div className="ClassContent">            
                <div className="ClassLeft">
                    {
                        this.state.data.map(item=>{
                            return (
                                <a href="javascript:;" key={item.gc_id} onClick={this.change.bind(this,item.gc_id)}>
                                    <span><img src={item.image} alt=""/></span>
                                    <p>{item.gc_name}</p>
                                </a>
                            )
                        })
                    }
                </div>
                {/* <ClassRight gc_id={this.state.ClassRightDataId} /> */}

                <Switch>
                    <Route path="/Classify/:gc_id" component={ClassRight}></Route>
                    <Redirect from="/Classify" to="/Classify/825"/>
                </Switch>

            </div>
        )
    }
}

ClassLeft = withRouter(ClassLeft);
export default ClassLeft ;