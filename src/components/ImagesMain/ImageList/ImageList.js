import React, { useEffect, useState } from "react";
import style from "./ImageList.module.css";

import ImageElement from "./ImageElement/ImageElement";
import PostImage from "./PostImage/PostImage";
import link from "../../../other/other/link";
import AuthContext from "../../../other/other/AuthContext";

function ImageList() {
    const ctx = React.useContext(AuthContext);
    const [images, setImages] = useState([]);
    let loading = false;
    // user_login name description value

    const fetchImages = () => {
        loading = true;
        fetch(link + 'images/' + ctx.login)
            .then(response => response.json())
            .then(result => {
                setImages(result);
                loading = false;
            });
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (<div className={style.main}>
        {loading ? <div /> : <PostImage refresh={fetchImages} />}
        {Array.isArray(images) && images.map((element) => {
            return <ImageElement
                key={element[0]}
                id={element[0]}
                user={element[1]}
                name={element[2]}
                description={element[3]}
                value={element[4]}
                userImg={element[6]}
                likes={element[7] + 0}
                unLikes={element[8] + 0}
                liked={element[9]}
            />;
        })}
    </div>);
}

export default ImageList;