import React,{Component} from "react" ;

// 引入组件
import Footer from "@common/Footer" ;
import http from "@/server.js" ;

// 引入 antd 框架组件
import { Carousel } from 'antd';

// 引入样式
import "./home.less" ;

// 引入首页组件
import Banner from "./Banner" ;
import Header from "./Header" ;
import HomeNav from "./HomeNav" ;



class Home extends Component {
    constructor (){
        super();
        this.state = {
            data:[],
        }
    }

    async componentDidMount(){
        const res = await http.get("/api/mobile/index.php/",{act:"index"}) ; 
        this.setState({data:res.data.datas}) ;
    }
    
    render(){
        if(this.state.data.length>0){            
            return (            
                <div id="home">
                    <Header/>
                    <Banner bannerText={this.state.data[0]}/>
                    <HomeNav/>
                </div>
            )
        }else{
            return '';
        }
    }

}

export default Home;