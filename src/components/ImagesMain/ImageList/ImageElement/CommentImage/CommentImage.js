import React, { useEffect, useState } from "react";
import style from "./Comment.module.css";

import PostImage from "./PostComment";
import Comment from "./Comment";

function CommentImage(props) {
    // [0('id'), 1('login'), 3('value'), 4('date')]
    const [comments, setComments] = useState([]);
    const refresh = () => {
        fetch('http://213.155.174.52:5000/comments/' + props.id)
            .then(response => response.json())
            .then(result => setComments(result));
    }
    useEffect(() => {
        refresh();

        document.body.classList.add('no_overflow');
        return () => document.body.classList.remove('no_overflow');
    }, []);
    return (<div>
        <div className={style.commentBack} onClick={() => { props.setComment(false); }} />
        <div className={style.commentMain}>
            <div className={style.comments}>
                {comments.length < 1 && <div style={{ textAlign: 'center' }}>no comments</div>}
                {comments.map(element => {
                    return (<Comment
                        key={element[0]}
                        id={element[0]}
                        user={element[1]}
                        value={element[3]}
                        date={element[4]} />);
                })}
            </div>
            <PostImage refresh={refresh} image={props.id} comments={comments} setComments={setComments} />
        </div>
    </div>);
}

export default CommentImage;