import React, { useState } from "react";
import style from "./Comment.module.css";

import ImageLike from "../ImageLike";
import GetDate from "../../../../../other/other/GetDate";

function Comment(props) {
    const [like, setLike] = useState(props.like);
    const [likes, setLikes] = useState(props.likes);
    const [unlikes, setUnlikes] = useState(props.unlikes);
    // date value user id

    return (<div className={style.comment}>
        <h1 style={{ marginLeft: '15px', fontSize: '15px', display: 'flex', flexDirection: 'row' }}>
            {props.user}
            <div style={{ marginLeft: '20px' }}>
                {GetDate(props.date)}
            </div>
        </h1>
        <h2 style={{ marginLeft: '5px', fontSize: '20px' }}>{props.value}</h2>
        <div className={style.removeComments} style={{ width: '60px', marginBottom: '5px' }}>
            <ImageLike link={'likeComment/'} id={props.id}
                setLike={setLike} like={like}
                setLikes={setLikes} likes={likes}
                setUnlikes={setUnlikes} unlikes={unlikes} />
        </div>
    </div>);
}

export default Comment;