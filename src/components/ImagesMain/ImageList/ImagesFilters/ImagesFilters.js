import React, { useEffect, useState } from "react";
import style from "./ImagesFilters.module.css";

function ImagesFilters(props) {
    const [defaultArray, setDefaultArray] = useState(props.images);
    useEffect(() => {
        if (!Array.isArray(defaultArray) || defaultArray.length < 1) {
            setDefaultArray(props.images);
        }
    }, [props, defaultArray]);

    const setImagesDefault = () => {
        props.setImages(defaultArray);
    }

    const orderByDate = () => {
        const sorted = Array.from(defaultArray).sort((a, b) =>
            new Date(b[5]).getTime() - new Date(a[5]).getTime());
        props.setImages(sorted);
    }

    const orderByLikes = () => {
        let sorted = Array.from(defaultArray).sort((a, b) => b[11] - a[11]);
        props.setImages(sorted);
    }


    return (<div className={style.filters}>
        <button onClick={setImagesDefault}>Default</button>
        <button onClick={orderByDate}>By date</button>
        <button onClick={orderByLikes}>By Likes</button>
    </div>);
}

export default ImagesFilters;