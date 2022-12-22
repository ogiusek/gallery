import React, { useEffect, useState } from "react";

import LoginMain from "./LoginMain/LoginMain";
import ImagesMain from "./ImagesMain/ImagesMain";


function Main(props) {
    const [isLogged, setIsLogged] = useState(false);
    const isLoggedIn = async (login, password) => {
        if (typeof login !== typeof 'string' || login.length <= 0) {
            setIsLogged(false);
            return
        }
        fetch('http://213.155.174.52:5000/users/' + login)
            .then(response => response.json())
            .then(result => {
                setIsLogged(result[1] === password);
            });
    }

    useEffect(() => {
        isLoggedIn(props.login, props.password);
    }, [props.password, props.login]);

    return (
        <React.Fragment>
            {isLogged ?
                (<ImagesMain login={props.login} password={props.password} setLogin={props.setLogin} setPassword={props.setPassword} />) :
                (<LoginMain login={props.login} password={props.password} setLogin={props.setLogin} setPassword={props.setPassword} />)}
        </React.Fragment>
    );
}

export default Main;