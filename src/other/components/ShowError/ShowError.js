import React, { useEffect } from "react";
import style from "./ShowError.module.css";

import AuthContext from "../../other/AuthContext";

function ShowError(props) {
    const ctx = React.useContext(AuthContext);
    // errorText submit

    useEffect(() => {
        ctx.hide_overflow();
        return ctx.show_overflow;
    });

    return (
        <div>
            <div className={style.shadow} onClick={() => props.submit || ctx.setError('')} />
            <div className={style.main}>
                <div className={style.text}>{props.text}</div>
                <button className={style.submit} onClick={() => {
                    ctx.setError('');
                    props.submit && props.submit();
                }}>Ok</button>
            </div>
        </div>);
}

export default ShowError;