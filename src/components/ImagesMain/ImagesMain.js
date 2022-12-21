import React from "react";



function ImagesMain(props) {

    return (
        <React.Fragment>
            {props.login}
            <br />
            {props.password}
        </React.Fragment>
    );
}

export default ImagesMain;