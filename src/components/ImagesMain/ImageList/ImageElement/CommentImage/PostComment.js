import React, { useState } from "react";
import style from "./Comment.module.css";

import AuthContext from "../../../../../other/other/AuthContext";
import sendCommentImage from "./sendCommentImage";
import link from "../../../../../other/other/link";

function PostImage(props) {
    const ctx = React.useContext(AuthContext);
    const [comment, setComment] = useState('');
    // props.image ctx.login

    const commentHandler = event => {
        setComment(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        props.setComments(props.comments);
        fetch(link + 'comments/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'value': comment,
                'image_id': props.image,
                'user_login': ctx.login
            })
        }).then(() => {
            setComment('');
            props.refresh()
        });
    }

    return (<form className={style.postMain} onSubmit={submit}>
        <input type={'text'} value={comment} onChange={commentHandler} />
        <button type="submit">
            <img src={sendCommentImage} alt="post" />
        </button>
    </form >);
}


export default PostImage;