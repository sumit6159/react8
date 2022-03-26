import { createContext, useState } from "react";
export const isAuth  = createContext();
export const AuthContextProvider  = ({children}) => {
    const [loginStatus, setLogin] = useState(false);
    const [token, setToken] = useState('');
    const toggleAuth = (state) => {
        setLogin(state)
    }
    const handleToken = (token) => {
        setToken(token)
    }
    return (
    <>
        <isAuth.Provider value={{loginStatus, toggleAuth, token,handleToken}}>
            {children}
            </isAuth.Provider>
    </> 
    )
};