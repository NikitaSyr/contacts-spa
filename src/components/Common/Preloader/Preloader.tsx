import preloader from "../../../assets/img/Fetching.svg";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = () => {
    return (
        <img src={preloader} alt="" className={s.preloader}/>
    )
}

export default Preloader;