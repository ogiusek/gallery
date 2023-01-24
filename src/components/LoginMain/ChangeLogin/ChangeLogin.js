import React from "react";
import style from "./ChangeLogin.module.css";
import AuthContext from "../../../other/other/AuthContext";

function ChangeLogin(props) {
    const ctx = React.useContext(AuthContext);
    return (
        <div className={style.main}>
            <label htmlFor="button">
                {props.register ?
                    'Have account ?' :
                    "Don't have an account ?"}
            </label>
            <button name="button" className={style.registerButton + ' ' + (props.register ? style.login : style.register)}
                onClick={() => props.setRegister(!props.register)}>
                {props.register ? 'Login' : 'Register'}
            </button>
            <div onClick={() => { ctx.setLogin('g'); }}>Continue without account</div>
        </div>
    );
}

export default ChangeLogin;