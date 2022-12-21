import React from "react";
import style from "./ChangeLogin.module.css";

function ChangeLogin(props) {
    return (
        <div className={style.main}>
            <label htmlFor="button">
                {props.register ?
                    'Have account ?' :
                    "Don't have an account ?"}
            </label>
            <button name="button" className={style.registerButton + ' ' + (props.register ? style.login : style.register)}
                onClick={() => { props.setRegister(!props.register) }}>
                {props.register ? 'Login' : 'Register'}
            </button>
        </div>
    );
}

export default ChangeLogin;