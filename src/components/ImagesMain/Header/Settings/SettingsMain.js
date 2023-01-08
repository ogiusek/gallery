import React, { useState } from "react";
import style from "./SettingsMain.module.css";

import SettingsIcon from "./SettingsIcon/SettingsIcon";
import SettingsSelect from "./SettingsSelect/SettingsSelect";
import Settings from "./Settings/Settings";

function SettingsMain(props) {
    const [select, setSelect] = useState(false);
    const [settings, setSettings] = useState(false);
    return (<div className={style.main}>
        <SettingsIcon select={select} setSelect={setSelect} />
        {select && <SettingsSelect setSettings={setSettings} setSelect={setSelect} nightMode={props.nightMode} setNightMode={props.setNightMode} />}
        {settings && <Settings setSettings={setSettings} />}
    </div>);
}

export default SettingsMain;