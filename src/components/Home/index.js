import React,{Component} from "react" ;

// 引入组件
import Footer from "@common/Footer" ;
import http from "@/server.js" ;


// 引入样式
import "./home.less" ;

// 引入首页组件
import Banner from "./Banner" ;
import Header from "./Header" ;
import HomeNav from "./HomeNav" ;
import Notice from "./Notice" ;

import ContentTop from "./Content_Top" ;



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
        console.log(this.state.data)
    }
    
    render(){
        if(this.state.data.length>0){    
            let data = this.state.data;

            let ContentTopData = {
                SalesData:data[1],
                HomeAlikeData:data[2],
                HomeAlikeDatazp:data[3],
                HomeAlikeDataYS:data[4],
                HomeAlikeDataDXZM:data[5],
                HomeAlikeDataZS:data[6],
                HomeAlikeDataBGSB:data[7],
            }
            return (            
                <div id="home">
                    <Header/>
                    <Banner bannerText={data[0]}/>
                    <HomeNav/>
                    <Notice/>
                    <ContentTop data={ContentTopData} />
                </div>
            )
        }else{
            return '';
        }
    }

}

export default Home;