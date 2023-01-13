import React from "react";

const AuthContext = React.createContext({
    login: null,
    password: null,
    setLogin: null,
    setPassword: null,
    hide_overflow: null,
    show_overflow: null,
    setError: null
});

export default AuthContext;