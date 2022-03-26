import React,{useContext} from 'react'
import {Create} from '../CreateAccount/Create'
import {Login} from '../Login/Login'
import { CreateAccount } from '../../Contexts/CreateAccount'
import { isAuth } from '../../Contexts/AuthContext'

export const Main = () => {
    const {toggleAuth, loginStatus, handleToken, token} = useContext(isAuth);
    const {handleAccount, Account, accountState, handleAccountState} = useContext(CreateAccount);
    console.log(accountState)
    return (
    <div>
        {loginStatus ? 
        <Login /> : null
        }

        {accountState ? null : <Create />}
    </div>
    )
}
