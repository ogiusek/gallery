import React, { useEffect, useState } from "react";
import style from "./Settings.module.css";
import ChangeInput from "./Components/ChangeInput/ChangeInput";
import AuthContext from "../../../../../other/AuthContext";

function Settings(props) {
    const ctx = React.useContext(AuthContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // {method: "POST",
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
    //     'login': ,
    //     'password': Hash(password.current.value)
    // })}
    const changePassword = () => { }
    const changeLogin = () => {
        const change = () => {
            // fetch('http://213.155.174.52:5000/users/post', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         'login': ctx.login,
            //         'password': ctx.password
            //     })
            // }).then(response => response.json())
            //     .then(result => {
            //         if (result['value'] === 'worked') {
            //             props.setLogin('');
            //             props.setPassword('');
            //         }
            //     })
        }
        fetch('http://213.155.174.52:5000/users/' + login)
            .then(response => response.json())
            .then(result => {
                if (result.value === 'not found in database') {
                    change();
                    // { 'value': 'worked' }
                }
            });
    }

    return (<div>
        <div className={style.outside} onClick={() => { props.setSettings(false); }} />
        <div className={style.inside}>
            {/* <ChangeInput label={'Login'} value={login} setValue={setLogin} method={changeLogin} /> */}
            {/* <ChangeInput label={'Password'} value={password} setValue={setPassword} method={changePassword} /> */}
        </div>
    </div>);
}

export default Settings;