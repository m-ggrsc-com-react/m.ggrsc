import React,{Component} from "react" ;

import "./Login.less" ;

// 引入组件
import Header from "./Header" ;
import Agreement from "./Agreement" ;
import Footer from "@common/Fn" ;



class Login extends Component {
    constructor(){
        super();

        this.state ={
            HeaderData:{
                CommonLeftIcon:"http://m.ggrsc.com/images/home_b.png",
                CommonConter:"登录",
                CommonRightIcon:"注册"
            },

            RegisterData:[
                {
                    title:"账 户",
                    placeholder:"用户名/邮箱/已验证手机",
                    Id:"username",
                    Span:"input-del"
                },
                {
                    title:"密 码",
                    placeholder:"请输入登录密码",
                    Id:"pwd",
                    Span:"input-del"
                },
            ],
        
            RegLoginBtnData:{
                Agreement:"七天免登陆",
                Zcxy:null,
                ForgetPassword:"忘记密码",
                BtnData:"登 录"
            }
        }

    }

    RegisterOnBlur(event){
        let e = event.target;
        let ImputDel = e.nextElementSibling;
        ImputDel.style.display="block";
        
        if(e.value.length<=0){
            ImputDel.style.display="none";
        }
    }

    Empty(event){
        let Ipt = event.target.previousSibling;
        Ipt.value = null;
        event.target.style.display="none";
    }

    render(){
        return (
            <div className="Login">
                <Header Data={this.state.HeaderData} RouterPath="/Reg" />
                
                <div className="LoginCon">
                    <ul className="form-box">
                        {
                            this.state.RegisterData.map(item=>{
                                return (
                                    <li className="form-item" key={item.Id}>
                                        <h4>{item.title}</h4>
                                        <div className="input-box">
                                            <input type="text" placeholder={item.placeholder} id={item.Id} 
                                                onInput={()=>{
                                                    this.RegisterOnBlur(event);
                                                }}
                                            />
                                            <span className={item.Span} onClick={
                                                ()=>{
                                                    this.Empty(event);
                                                }
                                            }></span>
                                        </div>
                                    </li>                
                                )
                            })
                        }
                    </ul>
                </div>
                
                <Agreement RegLoginBtnData={this.state.RegLoginBtnData} />

                <Footer/>
            </div>
        )
    }
}

export default Login ;