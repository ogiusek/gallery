import React, { useState, useEffect } from "react";
import './ImagesMain.css';

import Header from "./Header/Header";
import ImageList from "./ImageList/ImageList";

function ImagesMain(props) {
    const [nightMode, setNightMode] = useState(localStorage.getItem('night'));

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        if (nightMode) {
            html.classList.add('night');
            return () => html.classList.remove('night');
        } else {
            html.classList.remove('night');
        }
    }, [nightMode]);

    return (<div className={'main'}>
        <Header nightMode={nightMode} setNightMode={setNightMode} />
        <ImageList />
    </div>);
}

export default ImagesMain;