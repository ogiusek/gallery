import React from "react";
import style from './Input.module.css';

function Input(props) {
    return (<React.Fragment>
        <label htmlFor={props.text} className={style.label}>{props.text}</label>
        <input type={props.hide ? 'password' : 'hide'} name={props.id} className={style.input} value={props.val} onChange={event => { props.setVal(event.target.value) }} />
    </React.Fragment>)
}

export default Input;