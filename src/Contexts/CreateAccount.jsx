import { createContext, useState } from 'react';

export const CreateAccount = createContext();

export const CreateAccountProvider = ({ children }) =>{
    const [Account, setAccount] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
    });
    const handleAccount = (element) => {
        const [id, value] = element.target;
        setAccount({...Account, [id] : value});
    }
    const [accountState, setAccountState] = useState(false);
    const handleAccountState = (element) => {
        setAccountState(element)
    }
    return (
        <CreateAccount.Provider value={{handleAccount, Account, accountState, handleAccountState}}>
            {children}
        </CreateAccount.Provider>
    )
}