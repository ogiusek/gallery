import React from "react";
import style from "./SettingsIcon.module.css";

function SettingsIcon(props) {
    return (
        <div className={style.center + ' invert'}>
            <div className={style.image} onClick={() => {
                props.setSelect(!props.select);
            }} />
        </div>);
}

export default SettingsIcon;