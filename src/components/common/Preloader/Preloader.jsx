import React from "react";
import preloader from '../../../assets/images/preloader.gif';
import style from './Preloader.module.css';

let Preloader = (props) =>{
    return <div className={style.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader;
