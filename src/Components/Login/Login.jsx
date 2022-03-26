import React, { useContext, useState } from 'react'
import { CreateAccount } from '../../Contexts/CreateAccount'
import { isAuth } from '../../Contexts/AuthContext'
import axios from 'axios';
export const Login = () => {
    const {toggleAuth, loginStatus, handleToken, token} = useContext(isAuth);
    const {handleAccount, Account, accountState, handleAccountState} = useContext(CreateAccount);
    const [userDetail, setUserDetail] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        avatar : 'https://reqres.in/img/faces/4-image.jpg'
    });
    
    const [loginDd, setLoginDb] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
    })
    const setlgb = (element)=> {
        const{name, value} = element.target;
        setLoginDb({...loginDd, [name]: value});
    }
    const GetUsers = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/login', loginDd).then((response) => {
            handleToken(response.data.token);
        }).catch((err) =>{
            console.log(err.message);
        })
    }
  return (
    <div>
        <div>
        <form onSubmit={(e)=> GetUsers(e)}>
            
            <p>email</p>
            <input type="email" name='email' onChange={(element) => setlgb(element)}/>
            
            <p>Passsword</p>
            <input type="password" name='passsword' onChange={(element) => setlgb(element)}/>
            
            <input type="submit" />
            </form>
        </div>
        {token !== '' ? 
        <div>
            Login successfully
        </div>
        : null}
    </div>
  )
}