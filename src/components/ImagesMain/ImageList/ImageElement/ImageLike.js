import React from "react";
import style from "./ImageElement.module.css";

import imageImages from "./imageImages";
import AuthContext from "../../../../other/other/AuthContext";
import link from "../../../../other/other/link";

function ImageLike(props) {
    const ctx = React.useContext(AuthContext);
    const checkLastLikeVal = (val) => {
        if (val !== props.like) {
            val === 1 && props.setLikes(props.likes + 1);
            val === -1 && props.setUnlikes(props.unlikes + 1);
            fetch(link + props.link, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'value': val === 1,
                    'comment_id': props.id,
                    'image_id': props.id,
                    'user_login': ctx.login
                })
            });
        } else {
            fetch(link + props.link, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'comment_id': props.id,
                    'image_id': props.id,
                    'user_login': ctx.login
                })
            })
        }

        if (props.like === 1) {
            props.setLikes(props.likes - 1);
        } else if (props.like === -1) {
            props.setUnlikes(props.unlikes - 1);
        }
    }

    const giveLike = () => {
        checkLastLikeVal(1);
        props.setLike(props.like === 1 ? 0 : 1);
    }

    const giveUnlike = () => {
        checkLastLikeVal(-1);
        props.setLike(props.like === -1 ? 0 : -1);
    }

    return (
        <div className={style.likes} style={{ 'pointerEvents': ctx.login === 'g' && 'none' }}> {/* likes */}
            <div style={{ maxWidth: '30%' }} onClick={giveLike}> {/* like */}
                <img src={imageImages.like} alt="like" loading="lazy" className={(props.like === 1 ? style.selectedLike + ' selectedLike' : '')} />
                <h1>{props.likes}</h1>
            </div>
            <div style={{ maxWidth: '30%' }} onClick={giveUnlike}> {/* unlike */}
                <img src={imageImages.unlike} alt="unlike" loading="lazy" className={(props.like === -1 ? style.selectedUnlike + ' selectedUnlike' : '')} />
                <h1>{props.unlikes}</h1>
            </div>
        </div>
    );
}

export default ImageLike;