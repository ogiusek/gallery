import React from "react";
import style from "./Button.module.css";

function Button(props) {
    return (
        <div onMouseEnter={props.method}>
            <button className={style.button + ' ' + (!props.canUse && style.disabled)}
                disabled={!props.canUse}
                type={'submit'}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;