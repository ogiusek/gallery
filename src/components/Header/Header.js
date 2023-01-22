import React from "react";
import style from "./Header.module.css";

import Logo from "../LoginMain/SharedComponents/Logo/Logo";
import SettingsMain from "./Settings/SettingsMain";
import AuthContext from "../../other/other/AuthContext";

function Header(props) {
    const ctx = React.useContext(AuthContext);
    // 'logo' 'search'    'my images'    'settings' 'logout' 'night'
    return (
        <div>
            <div className={style.main}>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div style={{
                    height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    position: 'absolute', left: '0', right: '0', textAlign: 'center'
                }}>
                    <img className={style.userImage + ' invert'} alt="" src={ctx.userImg} />
                    <div className={style.loginText} style={{ 'textAlign': 'center', 'fontSize': '3vw' }}>{ctx.login}</div>
                </div>
                <SettingsMain nightMode={props.nightMode} setNightMode={props.setNightMode} />
            </div>
            <div className={style.main + ' ' + style.placeholder}></div>
        </div>);
}

export default Header;