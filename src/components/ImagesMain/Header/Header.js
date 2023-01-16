import React from "react";
import style from "./Header.module.css";

import Logo from "../../LoginMain/SharedComponents/Logo/Logo";
import SettingsMain from "./Settings/SettingsMain";
import AuthContext from "../../../other/other/AuthContext";

function Header(props) {
    const ctx = React.useContext(AuthContext);
    // 'logo' 'search'    'my images'    'settings' 'logout' 'night'
    return (
        <div>
            <div className={style.main}>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <img className={style.userImage + ' invert'} src={ctx.userImg} />
                    {ctx.login}
                </div>
                <SettingsMain nightMode={props.nightMode} setNightMode={props.setNightMode} />
            </div>
            <div className={style.main + ' ' + style.placeholder}></div>
        </div>);
}

export default Header;