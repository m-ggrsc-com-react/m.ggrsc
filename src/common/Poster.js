import React from "react" ;

const Poster = (props)=>{
    let data = props.data;
    return(
        <img src={data.image} alt={data.title}/>
    )
}

export default Poster ;