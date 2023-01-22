import React from "react";
import style from "./SettingsSelect.module.css";

import AuthContext from "../../../../other/other/AuthContext";

function SettingsSelect(props) {
    const ctx = React.useContext(AuthContext);
    const unSelect = () => {
        props.setSelect(false);
    };
    return (
        <div>
            <div className={style.outside} onClick={unSelect} />
            <div className={style.main}>
                <div className="invert" onClick={() => {
                    ctx.setLogin();
                    ctx.setPassword();
                    localStorage.removeItem('login');
                    localStorage.removeItem('password');
                    unSelect();
                }} style={{ 'color': 'red' }}>Logout</div>

                <div onClick={() => {
                    unSelect();
                    props.setSettings(true);
                }}>Settings</div>

                <div onClick={() => {
                    unSelect();
                    if (localStorage.getItem('night')) {
                        localStorage.removeItem('night');
                    } else {
                        localStorage.setItem('night', true);
                    }
                    props.setNightMode(!props.nightMode);
                }}>Night mode</div>
            </div>
        </div >);
}

export default SettingsSelect;