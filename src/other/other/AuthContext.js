import React from "react";

const AuthContext = React.createContext({
    login: null,
    password: null,
    userImg: null,
    setLogin: null,
    setPassword: null,
    setUserImg: null,
    hide_overflow: null,
    show_overflow: null,
    setError: null
});

export default AuthContext;