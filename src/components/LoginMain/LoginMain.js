import React, { useState } from "react";
import style from "./LoginMain.module.css";

import Logo from "./SharedComponents/Logo/Logo";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ChangeLogin from "./ChangeLogin/ChangeLogin";

function LoginMain(props) {
    const [register, setRegister] = useState(false);

    return (
        <div className={style.mainComponent}>
            <div className={style.logo}>
                <Logo />
            </div>
            {register ?
                <Register setLogin={props.setLogin} setPassword={props.setPassword} /> :
                <Login setLogin={props.setLogin} setPassword={props.setPassword} />}
            <ChangeLogin register={register} setRegister={setRegister} />
        </div>
    );
}

export default LoginMain;