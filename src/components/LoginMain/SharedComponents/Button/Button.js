import React from "react";
import style from "./Button.module.css";

function Button(props) {
    return (<button className={style.button + ' ' + (!props.canUse && style.disabled)}
        onClick={props.onUse}
        disabled={!props.canUse}>
        {props.text}
    </button>);
}

export default Button;