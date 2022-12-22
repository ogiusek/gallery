import React, { useRef, useState } from "react";
import style from '../LoginMain.module.css';

import Hash from "../../../other/Hash";
import Input from "../SharedComponents/Input/Input";
import Button from "../SharedComponents/Button/Button";

function Login(props) {
    const login = useRef();
    const password = useRef();
    const [loginError, setLoginError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [canLogin, setCanLogin] = useState(false);

    const checkCanLogin = () => {
        // check login
        setLoginError();
        setPasswordError();
        if (login.current.value.length < 5) {
            setCanLogin(false);
            if (document.activeElement !== login.current &&
                login.current.value.length !== 0) {
                setLoginError('To short login');
            }
            return;
        }

        // check password
        if (password.current.value.length < 8) {
            setCanLogin(false);
            if (document.activeElement !== password.current &&
                password.current.value.length !== 0) {
                setPasswordError('To short password');
            }
            return;
        }
        setCanLogin(true);
    }

    const Login = async (event) => {
        try {
            event.preventDefault()
        } catch (error) { }
        if (!canLogin) {
            return;
        }
        fetch('http://213.155.174.52:5000/users/' + login.current.value)
            .then(response => response.json())
            .then(result => {
                if (result[1] === Hash(password.current.value)) {
                    props.setLogin(login.current.value);
                    props.setPassword(Hash(password.current.value));
                } else {
                    setPasswordError('Password or login is wrong!');
                }
            })
    }

    return (
        <form className={style.main} onSubmit={Login}>
            <div className={style.inputs}>
                <Input key={'1'} hide={false} text={'Login'} error={loginError} innerRef={login} method={checkCanLogin} />
                <Input key={'2'} hide={true} text={'Password'} error={passwordError} innerRef={password} method={checkCanLogin} />
            </div>
            <Button canUse={canLogin} text={'Login'} method={checkCanLogin} />
        </form>
    );
}

export default Login;