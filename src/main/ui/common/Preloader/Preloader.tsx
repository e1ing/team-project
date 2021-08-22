import loader from "../../assets/loader.gif";
import React from "react";

export const Preloader = () => {
    return (
        <div  style={{backgroundColor:"white"}}>
            <img src={loader}/>
        </div>
    )
}