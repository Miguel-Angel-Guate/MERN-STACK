import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
import axios from 'axios'
const Login = props => {
    const handleSubmit = event =>{
        event.preventDefault();
        const user ={
            email:event.target.email.value,
            password:event.target.password.value
        }
        axios.post('http://localhost:3002/users/login',user)
        .then(res=> {
            setTimeout(() =>{
                   props.history.push('/home')
            }, 1500);
     })
    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <TextField type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <TextField type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
