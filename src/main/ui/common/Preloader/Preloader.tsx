import loader from "../../assets/22DX.gif";
import React from "react";

export const Preloader = () => {
    return (
        <div  style={{backgroundColor:"white"}}>
            <img src={loader}/>
        </div>
    )
}