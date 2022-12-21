import React, { useState } from 'react';
import './App.css';

import AuthContext from './other/AuthContext';
import Main from './components/Main';

function App() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  // const ctx = useContext(AuthContext);
  return (
    <AuthContext.Provider value={{
      login: login,
      password: password,
      setLogin: setLogin,
      setPassword: setPassword
    }}>

      <Main login={login}
        password={password}
        setLogin={setLogin}
        setPassword={setPassword} />

    </AuthContext.Provider>
  );
}

export default App;
