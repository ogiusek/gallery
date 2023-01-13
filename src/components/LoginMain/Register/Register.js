import React, { useRef, useState } from "react";
import style from '../LoginMain.module.css';

import Hash from "../../../other/other/Hash";
import Input from "../SharedComponents/Input/Input";
import Button from "../SharedComponents/Button/Button";
import link from "../../../other/other/link";


function Register(props) {
    const login = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [canRegister, setCanRegister] = useState(false);

    const checkCanRegister = () => {
        setPasswordError();
        setPasswordConfirmError();
        // check login
        if (login.current.value.length < 5) {
            setCanRegister(false);
            if (document.activeElement !== login.current &&
                login.current.value.length !== 0) {
                setLoginError('To short login');
            }
            return;
        }
        // check password
        if (password.current.value.length < 8) {
            setCanRegister(false);
            setLoginError();
            if (document.activeElement !== password.current &&
                password.current.value.length !== 0) {
                setPasswordError('To short password');
            }
            return;
        }
        // check passwordConfirm
        if (passwordConfirm.current.value !== password.current.value) {
            setCanRegister(false);
            setLoginError();
            if (document.activeElement !== passwordConfirm.current &&
                passwordConfirm.current.value.length !== 0) {
                setPasswordConfirmError('Not identical passwords');
            }
            return;
        }

        fetch(link + 'users/' + login.current.value)
            .then(response => response.json())
            .then(result => {
                if (result['value'] === 'not found in database') {
                    setLoginError();
                    setCanRegister(true);
                } else {
                    setLoginError('Accout exist');
                    setCanRegister(false);
                }
            })
    }

    const Register = async (event) => {
        try {
            event.preventDefault()
        } catch (error) { }
        if (!canRegister) {
            return;
        }
        fetch(link + 'users/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'login': login.current.value,
                'password': Hash(password.current.value)
            })
        }).then(response => response.json())
            .then(result => {
                if (result['value'] === 'worked') {
                    props.setLogin(login.current.value);
                    props.setPassword(Hash(password.current.value));
                }
            })
    }

    return (
        <form className={style.main} onSubmit={Register}>
            <div className={style.inputs}>
                <Input key={'1'} hide={false} text={'Login'} innerRef={login} error={loginError} method={checkCanRegister} />
                <Input key={'2'} hide={true} text={'Password'} innerRef={password} error={passwordError} method={checkCanRegister} />
                <Input key={'3'} hide={true} text={'Confirm password'} innerRef={passwordConfirm} error={passwordConfirmError} method={checkCanRegister} />
            </div>
            <Button canUse={canRegister} text={'Register'} method={checkCanRegister} />
        </form>
    );
}

export default Register;