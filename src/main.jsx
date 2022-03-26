import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CreateAccountProvider } from './Contexts/CreateAccount'
import { AuthContextProvider } from './Contexts/AuthContext'
ReactDOM.render(
  <React.StrictMode>
    < AuthContextProvider >
      <CreateAccountProvider>
        <App />
      </CreateAccountProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
