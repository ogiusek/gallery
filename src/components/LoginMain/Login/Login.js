import React, { useEffect, useState } from "react";
import style from '../LoginMain.module.css';

import Input from "../SharedComponents/Input/Input";
import Button from "../SharedComponents/Button/Button";

function Login(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [canLogin, setCanLogin] = useState(false);

    const checkCanLogin = () => {
        // check login
        if (login.length < 5) {
            setCanLogin(false);
            return;
        }
        // check password
        if (password.length < 8) {
            setCanLogin(false);
            return;
        }
        setCanLogin(true);
    }

    const Login = async () => {
        fetch('http://213.155.174.52:5000/users/' + login)
            .then(response => response.json())
            .then(result => {
                if (result[1] === password) {
                    props.setLogin(login);
                    props.setPassword(password);
                }
            })
    }

    useEffect(() => {
        checkCanLogin();
    }, [login, password]);

    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <Input key={'1'} hide={false} text={'Login'} val={login} setVal={setLogin} />
                <Input key={'2'} hide={true} text={'Password'} val={password} setVal={setPassword} />
            </div>
            <Button canUse={canLogin} onUse={Login} text={'Login'} />
        </div>
    );
}

export default Login;