import React, { useEffect, useState } from "react";
import style from "./Comment.module.css";

import PostImage from "./PostComment";
import Comment from "./Comment";
import AuthContext from "../../../../../other/other/AuthContext";
import link from "../../../../../other/other/link";

function CommentImage(props) {
    // [0('id'), 1('login'), 3('value'), 4('date')]
    const ctx = React.useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const refresh = () => {
        fetch(link + 'comments/' + ctx.login + '/' + props.id)
            .then(response => response.json())
            .then(result => setComments(result));
    }

    useEffect(() => {
        refresh();

        ctx.hide_overflow();
        return ctx.show_overflow;
    }, [ctx]);

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
                        date={element[4]}
                        likes={element[5] + 0}
                        unlikes={element[6] + 0}
                        like={element[7]} />);
                })}
            </div>
            <PostImage refresh={refresh} image={props.id} comments={comments} setComments={setComments} />
        </div>
    </div>);
}

export default CommentImage;