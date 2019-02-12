import React,{Component} from "react" ;

import http from "@/server" ;

class ContentLeft extends Component {
    constructor(){
        super();

        this.state = {
            data:[],
            ClassRightDataId:null,
        }
    }


    async componentWillMount(){
        const res = await http.get("/api/mobile/index.php?act="+"goods_class") ; 
        await this.setState({data:res.data.datas.class_list}) ;      
    }
    
    // change(gc_id,event){
    //     // let target = event.target.parentNode.tagName=="A" || event.target.tagName=="A";                   
    //     // if(target){
    //     //     event.target.classList.add("active");
    //     //     event.target.parentNode.classList.add("active");
    //     // } 
    //     console.log(gc_id)
    // }
    // change(gc_id){
    //     // let target = event.target.parentNode.tagName=="A" || event.target.tagName=="A";                   
    //     // if(target){
    //     //     event.target.classList.add("active");
    //     //     event.target.parentNode.classList.add("active");
    //     // } 
    //     console.log(gc_id)
    // }

    render(){
        return (          
            <div className="ContentLeft">
                <div>
                    {
                        this.state.data.map(item=>{
                            return (
                                <a href="javascript:;" ref="a"  onClick={()=>{
                                    this.props.change(item.gc_id)
                                }} key={item.gc_id}>
                                    <img src={item.image} alt=""/>
                                    <p>{item.gc_name}</p>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ContentLeft ;