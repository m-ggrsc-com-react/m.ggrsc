import React,{Component} from "react" ;

import {withRouter} from 'react-router-dom';

import Home from "@components/Home" ; 
import Classify from "@components/Classify" ; 
import Search from "@components/Search" ; 
import ShoppingTrolley from "@components/Shopping-trolley" ; 
import My from "@components/My" ; 

import "@less/common/Footer.less" ;


class Fn extends Component{
    constructor(props){
        super(props);
        
        this.change = this.change.bind(this);

        this.state = {
            Footer:[
                {
                    title:"首页",
                    icon:"#icon-home",
                    path:"/Home",                    
                },
                {
                    title:"分类",
                    icon:"#icon-fenlei",
                    path:"/Classify",                    
                },
                {
                    title:"搜索",
                    icon:"#icon-sousuo",
                    path:"/Search",                    
                },
                {
                    title:"购物车",
                    icon:"#icon-icon1",
                    path:"/Shopping-trolley",                    
                    dot:true,
                },
                {
                    title:"我的商城",
                    icon:"#icon-seeusero",
                    path:"/My",                    
                }
            ],			
        }

    }
    
    change(item){
        this.props.history.push(item.path);        
    }
    
    goDetailWithParam(item){
        let path = item.path ;
        this.props.history.push({pathname : path,state:{item}});
    }
    
    render(props){
        return (
            <footer>
                {
                    this.state.Footer.map(item=>{
                        return (				
                            <div key={item.path} onClick={() =>{
                                this.change(item)
                            }}>
                                <svg className="icon-svg" aria-hidden="true">
                                    <use xlinkHref={item.icon}></use>
                                </svg>
                                {item.title}
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}
Fn = withRouter(Fn)
export default Fn ;