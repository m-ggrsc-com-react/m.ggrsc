import React from "react" ;

const HomeNavItem = (props)=>{
    return (
        <li gc_id={props.item.gc_id}>
            {
                <a href="javascript:;">
                    <span>
                        <img src={props.item.icon} alt=""/>
                    </span>
                    <p>{props.item.title}</p>
                </a>
            }
        </li>
    )
}

export default HomeNavItem ;