import React,{Component} from "react" ;

// 引入组件
import Footer from "@common/Fn" ;
import SearchHeader from "@common/SearchHeader" ;
import Content from "./Content" ;

import http from "@/server" ; 

import "./Search.less" ;

class Search extends Component {
    constructor (){
        super();

        this.state = {
            data:[]
        }
    }

    async componentDidMount(){
        const res = await http.get("/api/mobile/index.php?act=index&op=search_key_list");
        
        await this.setState({
            data:res.data.datas.list
        })

        console.log(this.state.data)
    }

    render(){
        return (
            <div>
                <Footer/>
                <SearchHeader/>
                <Content data={this.state.data}/>
            </div>
        )
    }

}

export default Search;