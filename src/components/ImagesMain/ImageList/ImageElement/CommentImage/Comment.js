import React from "react";
import style from "./Comment.module.css";

function Comment(props) {
    // date value user id
    const getDate = () => {
        let newDate = new Date();
        let oldDate = new Date(props.date);
        let sec = Math.floor((newDate - oldDate) / 1000 - 3600);
        let min = Math.floor(sec / 60);
        let hours = Math.floor(min / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
        let toReturn =
            (years > 0) ? years + ' years ago' :
                (months > 0) ? months + ' months ago' :
                    (weeks > 0) ? weeks + ' weeks ago' :
                        (days > 0) ? days + ' days ago' :
                            (hours > 0) ? hours + ' hours ago' :
                                (min > 0) ? min + ' minutes ago' :
                                    (sec > 0) ? sec + ' seconds ago' : 'now';
        return toReturn;
    }

    return (<div className={style.comment}>
        <h1 style={{ marginLeft: '15px', fontSize: '15px', display: 'flex', flexDirection: 'row' }}>
            {props.user}
            <div style={{ marginLeft: '20px' }}>
                {getDate()}
            </div>
        </h1>
        <h2 style={{ marginLeft: '5px', fontSize: '20px' }}>{props.value}</h2>
    </div>);
}

export default Comment;