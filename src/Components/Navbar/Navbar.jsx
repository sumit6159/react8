import React, { useContext } from 'react'

import { isAuth } from '../../Contexts/AuthContext'
import { CreateAccount } from '../../Contexts/CreateAccount'
export const Navbar = () => {
    const {toggleAuth, loginStatus, handleToken} = useContext(isAuth);
    const {handleAccount, Account, accountState, handleAccountState} = useContext(CreateAccount);

    return (
    <nav className="navbar">
        <div className="navbar_div">
            <button onClick={()=>{
                toggleAuth(!loginStatus)
                handleToken('')
            }}>
            {loginStatus ? 'logOut' : 'login'}
            </button>
            <button onClick={()=>{
                    handleAccountState(!accountState)
            }}>
                {accountState ? 'already have account' : "createAccount" }
            </button>
        </div>
    </nav>
    )
}