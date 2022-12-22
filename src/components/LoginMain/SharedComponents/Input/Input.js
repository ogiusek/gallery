import React from "react";
import style from './Input.module.css';

function Input(props) {
    return (<React.Fragment>
        <label htmlFor={props.text} className={style.label}>{props.text}</label>
        <input type={props.hide ? 'password' : 'hide'}
            onFocus={props.method}
            onBlur={props.method}
            onChange={props.method}
            className={style.input}
            ref={props.innerRef}
            name={props.id} />
        <input type={'submit'} hidden />
        <div className={style.error}>{props.error}</div>
    </React.Fragment>)
}

export default Input;