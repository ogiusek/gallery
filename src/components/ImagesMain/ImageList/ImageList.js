import React, { useEffect, useState } from "react";
import style from "./ImageList.module.css";

import ImageElement from "./ImageElement/ImageElement";
import PostImage from "./PostImage/PostImage";

function ImageList(props) {
    const [images, setImages] = useState([]);
    let loading = false;
    // user_login name description value

    const fetchImages = () => {
        loading = true;
        fetch('http://213.155.174.52:5000/all/images')
            .then(response => response.json())
            .then(result => {
                setImages(result.reverse());
                loading = false;
            });
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (<div className={style.main}>
        {loading ? <div /> : < PostImage refresh={fetchImages} />}
        {images.map((element, index) => {
            return <ImageElement
                key={element[0]}
                id={element[0]}
                user={element[1]}
                name={element[2]}
                description={element[3]}
                value={element[4]}
            />;
        })}
    </div>);
}

export default ImageList;