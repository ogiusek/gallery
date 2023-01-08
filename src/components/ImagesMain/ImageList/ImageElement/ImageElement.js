import React, { useEffect, useState } from "react";
import style from "./ImageElement.module.css";

import imageImages from "./imageImages";
import AuthContext from "../../../../other/AuthContext";
import CommentImage from "./CommentImage/CommentImage";

function ImageElement(props) {
    const ctx = React.useContext(AuthContext);
    const [like, setLike] = useState(0);
    const [likes, setLikes] = useState(0);
    const [unlikes, setUnlikes] = useState(0);
    const [comment, setComment] = useState(false);
    // user description value name

    useEffect(() => {
        const initSetLike = (value) => {
            if (value) {
                setLike(-1);
            } else {
                setLike(1);
            }
        };
        fetch('http://213.155.174.52:5000/likes/' + props.id)
            .then(response => response.json())
            .then(result => {
                result[2].map(element => element[1] === ctx.login && initSetLike(element[3]))
                setLikes(result[1])
                setUnlikes(result[0])
            });
    }, [ctx.login, props.id]);

    const checkLastLikeVal = (val) => {
        if (val !== like) {
            val === 1 && setLikes(likes + 1);
            val === -1 && setUnlikes(unlikes + 1);
        } else {
            fetch('http://213.155.174.52:5000/likes/delete', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'image_id': props.id,
                    'user_login': ctx.login
                })
            })
        }

        if (like === 1) {
            setLikes(likes - 1);
        } else if (like === -1) {
            setUnlikes(unlikes - 1);
        }

        fetch('http://213.155.174.52:5000/likes/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'value': val !== 1,
                'image_id': props.id,
                'user_login': ctx.login
            })
        });
    }

    const giveLike = () => {
        checkLastLikeVal(1);
        setLike(like === 1 ? 0 : 1);
    }

    const giveUnlike = () => {
        checkLastLikeVal(-1);
        setLike(like === -1 ? 0 : -1);
    }

    return (<div className={style.main}>
        {comment && <CommentImage setComment={setComment} id={props.id} />}
        <div className={'unselectable ' + style.title}>{props.name}</div>
        <div className={'unselectable ' + style.description}>{props.description}</div>

        <img className={'unselectable ' + style.img} alt="" src={props.value} />
        <div className={style.likes}>
            <div onClick={giveLike}>
                <img src={imageImages.like} alt="like" className={'unselectable ' + (like === 1 ? style.selectedLike : '')} />
                <h1 className="unselectable">{likes}</h1>
            </div>
            <div onClick={giveUnlike}>
                <img src={imageImages.unlike} alt="unlike" className={'unselectable ' + (like === -1 ? style.selectedUnlike : '')} />
                <h1 className="unselectable">{unlikes}</h1>
            </div>
        </div>
        <img className={style.comment} alt="comment" src={imageImages.comment} onClick={setComment} />

        <div className={'unselectable ' + style.user}>{props.user}</div>
    </div>);
}

export default ImageElement;