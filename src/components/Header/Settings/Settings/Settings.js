import React, { useEffect, useRef, useState } from "react";
import style from "./Settings.module.css";

import Input from "../../../LoginMain/SharedComponents/Input/Input";
import AuthContext from "../../../../other/other/AuthContext";
import ShowError from "../../../../other/components/ShowError/ShowError";
import Hash from "../../../../other/other/Hash";
import link from "../../../../other/other/link";

function Settings(props) {
    const ctx = React.useContext(AuthContext);
    const login = useRef();
    const password = useRef();
    const [image, setImage] = useState(ctx.userImg);

    useEffect(() => {
        ctx.hide_overflow();
        return ctx.show_overflow;
    }, [ctx]);

    const reader = new FileReader();
    reader.onload = () => {
        setImage(reader.result);
    }

    const nightModeButton = () => {
        if (localStorage.getItem('night')) {
            localStorage.removeItem('night');
        } else {
            localStorage.setItem('night', true);
        }
        props.setNightMode(!props.nightMode);
    }

    const changeImage = event => {
        event.preventDefault();
        if (ctx.userImg === image) {
            ctx.setError(<ShowError text={'Images are the same'} />);
            return;
        } else {
            fetch(link + 'users/' + ctx.login, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': ctx.login,
                    'newLogin': ctx.login,
                    'image': image,
                    'password': ctx.password
                })
            }).then(response => response.json())
                .then(() => {
                    ctx.setUserImg(image);
                })
        }
    }

    const changePassword = event => {
        event.preventDefault();
        if (password.current.value.length < 8) {
            ctx.setError(<ShowError text={'To Short Password'} />);
            return;
        } else {
            fetch(link + 'users/' + ctx.login, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': ctx.login,
                    'newLogin': ctx.login,
                    'image': ctx.userImg,
                    'password': Hash(password.current.value)
                })
            }).then(response => response.json())
                .then(result => {
                    if (result['value'] === 'worked') {
                        localStorage.setItem('login', ctx.login);
                        localStorage.setItem('password', Hash(password.current.value));
                    }
                })
        }
    }

    const changeLogin = (event) => {
        event.preventDefault();
        if (login.current.value.length < 5) {
            ctx.setError(<ShowError text={'To Short Login'} />);
            return;
        } else {
            fetch(link + 'users/' + ctx.login, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': ctx.login,
                    'newLogin': login.current.value,
                    'password': ctx.password
                })
            }).then(response => response.json())
                .then(result => {
                    if (result['value'] === 'worked') {
                        localStorage.setItem('login', login.current.value);
                        localStorage.setItem('password', ctx.password);
                    } else {
                        ctx.setError(<ShowError text={'Change Login Declined'} />);
                    }
                })
        }
    }

    if (false) {
        changePassword();
        changeLogin();
    }

    return (<div>
        <div className={style.outside} onClick={() => { props.setSettings(false); }} />
        <div className={style.inside}>
            {/* <form className={style.form} onSubmit={changeLogin}>
                <Input text={'Change login'} innerRef={login} />
                <button type={'submit'}>Submit</button>
            </form> */}
            <div className={style.nightMode} onClick={nightModeButton}>Night mode</div>
            <form className={style.form} onSubmit={changePassword}>
                <Input text={'Change password'} hide={true} innerRef={password} />
                <button type={'submit'}>Submit</button>
            </form>
            <form onSubmit={changeImage} className={style.form} style={{ marginTop: '15px' }}>
                <label>Change avatar</label>
                <div
                    className="invert"
                    style={{
                        width: '75px', height: '75px', borderRadius: '100%', backgroundColor: 'white',
                        backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', border: '1px solid white'
                    }}>
                    <input
                        type={'file'}
                        accept={'image/*'}
                        onInput={event => reader.readAsDataURL(event.target.files[0])}
                        style={{ opacity: '0', width: '100%', height: '100%', borderRadius: '100%' }} />
                </div>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    </div>);
}

export default Settings;