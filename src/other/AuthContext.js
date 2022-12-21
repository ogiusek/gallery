import React from "react";

const AuthContext = React.createContext({
    login: null,
    password: null,
    setLogin: null,
    setPassword: null
});

export default AuthContext;