import React, { useState } from "react";
import './ImagesMain.css';

import Header from "./Header/Header";
import ImageList from "./ImageList/ImageList";

function ImagesMain(props) {
    const [nightMode, setNightMode] = useState(false);

    return (<div className={'main'}>
        <Header nightMode={nightMode} setNightMode={setNightMode} />
        <ImageList />
        {/* {props.login} */}
        {/* <br /> */}
        {/* {props.password} */}
    </div>);
}

export default ImagesMain;