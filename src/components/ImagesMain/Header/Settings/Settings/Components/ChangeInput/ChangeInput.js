import React from "react";
import style from "./ChangeInput.module.css"

function ChangeInput(props) {
    return (<div className={style.main}>
        <label className={style.label} htmlFor={props.label}>Change {props.label}</label>
        <input className={style.input}
            name={props.label}
            type={(props.label === 'Password' ? 'password' : 'text')}
            value={props.value}
            onChange={event => {
                props.setValue(event.target.value);
            }} />
        <button className={style.confirm} onClick={props.method}>Change</button>
    </div>)
}

export default ChangeInput;