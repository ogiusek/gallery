import React, { useEffect, useState } from "react";

import LoginMain from "./LoginMain/LoginMain";
import ImagesMain from "./ImagesMain/ImagesMain";
import link from "../other/other/link";

function Main(props) {
    const [isLogged, setIsLogged] = useState(true);
    const isLoggedIn = async (login, password) => {
        if (typeof login !== typeof 'string' || login.length <= 0) {
            setIsLogged(false);
            return;
        }
        fetch(link + 'users/' + login)
            .then(response => response.json())
            .then(result => {
                if (result[1] === password) {
                    localStorage.setItem('login', login);
                    localStorage.setItem('password', password);
                }
                setIsLogged(result[1] === password);
            });
    }

    useEffect(() => {
        isLoggedIn(props.login, props.password);
    }, [props.password, props.login]);

    return (
        <React.Fragment>
            {
                isLogged ?
                    (<ImagesMain />) :
                    (<LoginMain login={props.login} password={props.password} setLogin={props.setLogin} setPassword={props.setPassword} />)}
        </React.Fragment>
    );
}

export default Main;