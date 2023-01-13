import React, { useState } from "react";
import style from "./ImageElement.module.css";

import imageImages from "./imageImages";
import CommentImage from "./CommentImage/CommentImage";
import ImageLike from "./ImageLike";

const URL_REGEX = [/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/];

function ImageElement(props) {
    const [like, setLike] = useState(props.liked);
    const [likes, setLikes] = useState(props.likes);
    const [unlikes, setUnlikes] = useState(props.unLikes);
    const [comment, setComment] = useState(false);
    // user description value name

    return (<div className={style.main}>
        {comment && <CommentImage setComment={setComment} id={props.id} />}
        <div className={style.title}>{props.name}</div> {/* title */}
        <div className={style.description}>{
            props.description.split(' ').map((word, key) => {
                return [word.match(URL_REGEX[0]) || word.match(URL_REGEX[1]) ?
                    <a key={key} className={style.detectedUrl} href={word} target={'_blank'} rel="noreferrer">{word.replace('http://', '').replace('https://', '')}</a> :
                    word, ' '];
            })
        }</div> {/* descritpion */}

        <img className={'img ' + style.img} loading="lazy" alt="" src={props.value} /> {/* image */}
        <div style={{ width: '100%', marginTop: '15px' }}>
            <ImageLike link={'likes/'} id={props.id}
                setLike={setLike} like={like}
                setLikes={setLikes} likes={likes}
                setUnlikes={setUnlikes} unlikes={unlikes} />
        </div>

        <img className={style.comment} loading="lazy" alt="comment" src={imageImages.comment} onClick={setComment} /> {/* comments */}
        <div className={style.user}>{props.user}</div> {/* creator */}
    </div>);
}

export default ImageElement;