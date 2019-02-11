import React,{Component}  from "react";

class RegisterInput extends Component {
    constructor(){
        super();

        this.state = {
            RegisterData:[
                {
                    title:"用 户 名",
                    placeholder:"请输入6-20个字符",
                    Id:"username",
                    Span:"input-del"
                },
                {
                    title:"设置密码",
                    placeholder:"请输入6-20位密码",
                    Id:"pwd",
                    Span:"input-del"
                },
                {
                    title:"确认密码",
                    placeholder:"请再次输入密码",
                    Id:"password_confirm",
                    Span:"input-del"
                },
                {
                    title:"邮　　箱",
                    placeholder:"请输入常用邮箱地址",
                    Id:"email",
                    Span:"input-del"
                }
            ]
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
        )
    }

}

export default RegisterInput ;