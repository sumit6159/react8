import React, {useState, useContext} from 'react'
import axios from 'axios'
// import { CreateAccount } from '../../Contexts/CreateAccount'
// import { isAuth } from '../../Contexts/AuthContext'

export const Create = () => {
    // const {toggleAuth, loginStatus, handleToken, token} = useContext(isAuth);
    // const {handleAccount, Account, accountState, handleAccountState} = useContext(CreateAccount);
    const [userDetail, setUserDetail] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        avatar : 'https://reqres.in/img/faces/4-image.jpg'
    });
    
    const handleChanges = (element) => {
        const { id, value } = element.target;
        setUserDetail({...userDetail, [id] : value})
    };
    const setData = (e) => { 
        e.preventDefault();
        axios.post("https://reqres.in/api/users", userDetail).then(()=>{
            console.log('success')
            setUserDetail({
                first_name : '',
            last_name : '',
            email : '',
            password : '',
            avatar : 'https://reqres.in/img/faces/4-image.jpg'
            });
        }).catch((err) => {
            console.log('error', err.message)
        })
    }
    return (
    <div>
        <div>
            <form onSubmit={(e)=> setData(e)}>
                <p>First Name</p>
                <input type="text" id='first_name' onChange={(element) => handleChanges(element)}/>
                
                <p>last Name</p>
                <input type="text" id='last_name' onChange={(element) => handleChanges(element)}/>
                
                <p>email</p>
                <input type="email" id='email' onChange={(element) => handleChanges(element)}/>
                
                <p>Passsword</p>
                <input type="password" id='passsword' onChange={(element) => handleChanges(element)}/>
                
                <input type="submit" />
                </form>
        </div>
        
    </div>
    )
}