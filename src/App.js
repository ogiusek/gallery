import React, { useState } from 'react';
import './App.css';

import AuthContext from './other/other/AuthContext';
import Main from './components/Main';

function App() {
  const [login, setLogin] = useState(localStorage.getItem('login'));
  const [userImg, setUserImg] = useState('');
  const [password, setPassword] = useState(Number(localStorage.getItem('password')));
  const [error, setError] = useState('');

  const hide_overflow = () => {
    document.body.classList.add('no_overflow');
  }

  const show_overflow = () => {
    document.body.classList.remove('no_overflow');
  }

  return (<AuthContext.Provider value={{
    login: login,
    password: password,
    userImg: userImg,
    setLogin: setLogin,
    setPassword: setPassword,
    setUserImg: setUserImg,
    setError: setError,
    hide_overflow: hide_overflow,
    show_overflow: show_overflow
  }}>

    <Main login={login}
      password={password}
      setLogin={setLogin}
      setUserImg={setUserImg}
      setPassword={setPassword} />
    {error}

  </AuthContext.Provider>);
}

export default App;
