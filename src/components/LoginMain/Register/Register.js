import React, { useEffect, useState } from "react";
import style from '../LoginMain.module.css';

import Input from "../SharedComponents/Input/Input";
import Button from "../SharedComponents/Button/Button";

function Register(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [canRegister, setCanRegister] = useState(false);

    const checkCanRegister = () => {
        // check login
        if (login.length < 5) {
            setCanRegister(false);
            return;
        }
        // check password
        if (password.length < 8) {
            setCanRegister(false);
            return;
        }
        // check passwordConfirm
        if (passwordConfirm !== password) {
            setCanRegister(false);
            return;
        }

        fetch('http://213.155.174.52:5000/users/' + login)
            .then(response => response.json())
            .then(result => {
                if (result['value'] !== 'not found in database') {
                    setCanRegister(false);
                } else {
                    setCanRegister(true);
                }
            })
    }

    const register = async () => {
        fetch('http://213.155.174.52:5000/users/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'login': login,
                'password': password
            })
        }).then(response => response.json())
            .then(result => {
                // if (result['value'] === 'worked') {
                props.setLogin(login);
                props.setPassword(password);
                // }
            })
    }

    useEffect(() => {
        checkCanRegister();
    }, [login, password, passwordConfirm]);

    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <Input key={'1'} hide={false} text={'Login'} val={login} setVal={setLogin} />
                <Input key={'2'} hide={true} text={'Password'} val={password} setVal={setPassword} />
                <Input key={'3'} hide={true} text={'Confirm password'} val={passwordConfirm} setVal={setPasswordConfirm} />
            </div>
            <Button canUse={canRegister} onUse={register} text={'Register'} />
        </div>
    );
}

export default Register;